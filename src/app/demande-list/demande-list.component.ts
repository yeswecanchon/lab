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
  display: string = this.appService.session.demandeList.display || 'Complet'

  demandes: ShortDemande[]
  columns: Object[]
  initColumns: Object[]
  messages = {
    emptyMessage: 'Aucun résultat',
    totalMessage: 'demandes trouvées',
    selectedMessage: null
  }
  selected: ShortDemande[] = []
  loadingIndicator: boolean = false
  sort: {
    nom: string,
    data: string[]
  } = this.appService.session.demandeList.sort || {
    nom: 'id',
    data: ['desc']
  }
  paging: {
    offset: number,
    limit: number,
    count: number
  } = {
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
    this.onDisplayChange()
  }

  onStatutClick(value) {
    this.appService.eventEmitter.emit({ option: 'onStatutClick', value: value })
  }

  onNbDeclaClick(value) {
    this.appService.eventEmitter.emit({ option: 'onNbDeclaClick', value: value })
  }

  onSearch(searchItems?) {

    this.loadingIndicator = true
    
    // if search has changed, save it and reset the offset
    if (searchItems) {
      this.searchItems = searchItems
      this.paging.offset = 0
    }

    // Use session's paging if exists and destroy it
    let paging = this.appService.session.demandeList.paging
    if(paging){
      this.paging.offset = paging.offset
      this.paging.limit = paging.limit
      delete this.appService.session.demandeList.paging
    }

    this._demandeListService.getDemandes(this.sort, this.paging.offset, this.paging.limit, this.searchItems)
      .then(data => {
        this.demandes = data.demandes
        this.totalStatuts = data.totalStatuts
        this.paging.count = data.count
        this.loadingIndicator = false
      })
      .catch(error => this.loadingIndicator = false)
  }

  onActivate(event) {

    if (event.event.ctrlKey) {
      window.open(`${this.appService.conf.appUrl}/demande/${event.row.id}`, '_blank')
    }
    else {
      if (event.column.checkboxable || event.column.prop === "nbDecla" || event.column.prop === "nna" || event.column.prop === "isni") return
      else {
        this.appService.session.demandeList = {
          shortDemande: event.row,
          demandes: this.demandes.filter((shortDemande: ShortDemande) => shortDemande), // remove empty elements
          sort: this.sort,
          paging: this.paging,
          display: this.display
        }
        this._router.navigate(['demande', event.row.id])
      }
    }
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

  onDisplayChange() {

    if (this.display === "Complet") {
      this.columns = this.initColumns
    }
    else if (this.display === "Simple") {
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