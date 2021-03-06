import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { DatePipe } from '@angular/common'
import { AppService } from '../../app.service'

// TODO rem this when @angular/material update
import { IMyOptions } from "ngx-mydatepicker";

@Component({
  selector: 'app-demande-list-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class DemandeListSearchComponent implements OnInit {

  // TODO rem this when @angular/material update
  options: IMyOptions = {
    dayLabels: { su: "Dim", mo: "Lun", tu: "Mar", we: "Mer", th: "Jeu", fr: "Ven", sa: "Sam" },
    monthLabels: { 1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Juin", 7: "Juil", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc" },
    dateFormat: "dd/mm/yyyy",
    firstDayOfWeek: "mo",
    sunHighlight: true,
    showTodayBtn: false
  }

  searchItems
  availableSearchItems

  @Output() onSearch = new EventEmitter<any>()

  constructor(private _appService: AppService) { }

  ngOnInit() {

    this.searchItems = this._appService.session.search.searchItems || {
      priorites: { name: 'Priorité', values: [] },
      statuts: { name: 'Statut', values: [] },
      dates: { name: 'Date', values: [] },
      numero: { name: 'Numéro', values: [] },
      auteur: { name: 'Auteur', values: [] },
      expediteur: { name: 'Expédideur', values: [] },
      editeur: { name: 'Editeur', values: [] }
    }

    this.availableSearchItems = this._appService.session.search.availableSearchItems || {
      priorites: [],
      statuts: [],
      dates: {
        debut: '',
        fin: ''
      },
      numero: '',
      auteur: '',
      expediteur: '',
      editeur: ''
    }

    if (this._appService.session.appReady) {
      if (!this.availableSearchItems.priorites.length && !this.searchItems.priorites.length) this.initPriorites()
      if (!this.availableSearchItems.statuts.length && !this.searchItems.statuts.length) this.initStatuts()
      this.search()
    }

    this._appService.eventEmitter.subscribe(res => {
      if (res.hasOwnProperty('option')) {
        switch (res.option) {
          case 'onPrioritesLoaded':
            this.initPriorites()
            break
          case 'onStatutsLoaded':
            this.initStatuts()
            break
          case 'onAppReady':
            this.search()
            break
          case 'onStatutClick':
            this.setSearchStatut(res.value)
            break
          case 'onNbDeclaClick':
            this.addSearchItem('numero', res.value)
            break
        }
      }
    })
  }

  private initPriorites() {
    let priorites = this._appService.session.priorites
    for (let i in priorites) {
      this.availableSearchItems.priorites.push({
        text: priorites[i].libelle,
        class: 'chip-' + priorites[i].libelle,
        value: priorites[i].value
      })
    }
  }

  private initStatuts() {
    let statuts = this._appService.session.statuts
    for (let i in statuts) {
      this.availableSearchItems.statuts.push({
        text: statuts[i].libelle,
        class: 'chip-primary',
        value: statuts[i].value
      })
    }
  }

  search() {
    this._appService.session.search = {
      searchItems: this.searchItems,
      availableSearchItems: this.availableSearchItems
    }
    this.onSearch.emit(this.searchItems)
  }

  addSearchItem(searchItemName: string, item?: Object) {

    let searchChanged: boolean = true
    let items = this.searchItems[searchItemName].values

    // move chip-list item
    if (item instanceof Object) {
      items.push(item)
      let index = this.availableSearchItems[searchItemName].indexOf(item)
      if (index > -1) this.availableSearchItems[searchItemName].splice(index, 1)
    }
    // format value and add if not exists
    else {
      let _value = item || this.availableSearchItems[searchItemName]
      let _text = item || this.formatValue(_value, searchItemName)
      if (_text) {
        let _item = { text: _text, class: 'chip-primary', value: _value }
        let exists = items.filter(i => { return (i.value === _item.value) })
        if (!exists.length) items.push(_item)
      }
      else searchChanged = false
    }

    if (searchChanged) this.search()
  }

  removeSearchItem(searchItemName: string, item: Object, silent?: boolean) {

    let availables = this.availableSearchItems[searchItemName]
    // reorder chip-lists
    if (availables instanceof Array) {
      availables.push(item)
      availables.sort((o1, o2) => { return (o1.value as string).localeCompare(o2.value as string) })
    }
    let values = this.searchItems[searchItemName].values
    let index = values.indexOf(item)
    // remove item
    if (index > -1) values.splice(index, 1)

    if (!silent) this.search()
  }

  private formatValue(obj: any, searchItemName: string) {

    if (!obj) return null
    if (searchItemName === 'dates') {
      let debut = obj.debut.formatted
      let fin = obj.fin.formatted
      if (!debut || !fin) return null
      obj.debut = obj.debut.formatted
      obj.fin = obj.fin.formatted
      return ('Du ' + debut + ' au ' + fin)
    }
    else if (searchItemName === 'numero') {
      return isNaN(obj) ? null : obj
    }
    else return obj
  }

  private setSearchStatut(value) {

    while (this.searchItems.statuts.values.length) {
      this.removeSearchItem('statuts', this.searchItems.statuts.values[0], true)
    }
    let statuts = this.availableSearchItems.statuts
    this.addSearchItem('statuts', statuts.filter(statut => { return statut.value === value })[0])
  }
}
