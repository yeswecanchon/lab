import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { DemandeListService } from './demande-list.service'
import { AppService } from '../app.service'
import { PreferencesService } from '../preferences'
import { AppUtilsService } from '../_utils'
import { ShortDemande } from '../_types'

import { DemandeListConfig } from './demande-list.component.config'

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.scss'],
  providers: [
    DemandeListService,
    PreferencesService,
    AppUtilsService
  ]
})
export class DemandeListComponent implements OnInit {

  constructor(
    private _demandeListService: DemandeListService,
    private _preferencesService: PreferencesService,
    private _router: Router,
    public appService: AppService,
    public appUtilsService: AppUtilsService
  ) { }

  totalStatuts: any = {}
  display: string = 'Complet'

  demandes: ShortDemande[]
  columns: Object[]
  initColumns: Object[]
  messages = {
    emptyMessage: 'Aucun résultat',
    totalMessage: 'demandes trouvées',
    selectedMessage: null
  }
  selected = []
  loadingIndicator: boolean = false
  sort = {
    nom: 'id',
    data: ['desc']
  }
  paging = {
    offset: 0,
    limit: parseInt(this._preferencesService.properties.isni_demandeList_pageLength) || 10,
    count: 0
  }
  rowClass = (row) => {
    if (row.nbDecla > 1) {
      return ' demande-list-row-many-decla'
    }
  }

  @ViewChild('search') search
  @ViewChild('demandeList') demandeList
  @ViewChild('dateTpl') dateTpl: TemplateRef<any>
  @ViewChild('prioriteTpl') prioriteTpl: TemplateRef<any>
  @ViewChild('statutTpl') statutTpl: TemplateRef<any>
  @ViewChild('typeTpl') typeTpl: TemplateRef<any>
  @ViewChild('nomPrenomTpl') nomPrenomTpl: TemplateRef<any>
  @ViewChild('nbDeclaTpl') nbDeclaTpl: TemplateRef<any>
  @ViewChild('nnaTpl') nnaTpl: TemplateRef<any>
  @ViewChild('isniTpl') isniTpl: TemplateRef<any>

  private searchItems

  ngOnInit() {
    this.columns = DemandeListConfig.getColumns({
      tpl: {
        dateTpl: this.dateTpl,
        prioriteTpl: this.prioriteTpl,
        statutTpl: this.statutTpl,
        typeTpl: this.typeTpl,
        nomPrenomTpl: this.nomPrenomTpl,
        nbDeclaTpl: this.nbDeclaTpl,
        nnaTpl: this.nnaTpl,
        isniTpl: this.isniTpl
      }
    })
    this.initColumns = this.columns
  }

  onStatutClick(value) {
    this.appService.eventEmitter.emit({ option: 'onStatutClick', value: value })
  }

  onNbDeclaClick(value) {
    this.appService.eventEmitter.emit({ option: 'onNbDeclaClick', value: value })
  }

  onActivate(event) {

    if (event.event.ctrlKey) {
      window.open(`${this.appService.conf.appUrl}/demande/${event.row.id}`, '_blank')
    }
    else {
      if (event.column.checkboxable || event.column.prop === "nbDecla" || event.column.prop === "nna" || event.column.prop === "isni") return
      else {
        this.appService.session.shortDemande = event.row
        this.appService.session.demandes = this.demandes.filter((shortDemande: ShortDemande) => shortDemande) // remove empty elements
        this._router.navigate(['demande', event.row.id])
      }
    }
  }

  onSearch(searchItems?) {

    this.loadingIndicator = true
    if (searchItems) {
      this.searchItems = searchItems
      this.paging.offset = 0
    }
    this.appService.session.sort = this.sort
    this.appService.session.paging = this.paging
    this._demandeListService.getDemandes(this.sort, this.paging.offset, this.paging.limit, this.searchItems)
      .then(data => {
        this.demandes = data.demandes
        this.totalStatuts = data.totalStatuts
        this.paging.count = data.count
        this.loadingIndicator = false
      })
      .catch(error => this.loadingIndicator = false)
  }

  onSort(event) {

    let nom = event.sorts[0].prop
    let data = [event.sorts[0].dir]

    if (nom === 'dateCreation') nom = 'date'

    this.sort = {
      nom: nom,
      data: data
    }
    this.onSearch()
  }

  onPage(event) {
    this.paging.offset = event.offset
    this.onSearch()
  }

  onLimitChange(event) {
    this.paging.offset = 0
    this.onSearch()
  }

  onDisplayChange(event) {
    if (event.value === "Complet") {
      this.columns = this.initColumns
    }
    else if (event.value === "Simple") {
      this.columns = this.columns.filter((col: any) => {
        return col.name !== 'NNA' && col.name !== 'ISNI'
      })
    }
    setTimeout(() => this.demandeList.recalculate(), 300)
  }

  onSelect({ selected }) {
  }

  toggle() {
    this.search.toggle()
    setTimeout(() => this.demandeList.recalculate(), 300)
  }
}