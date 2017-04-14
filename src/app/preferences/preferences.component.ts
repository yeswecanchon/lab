import { Component, OnInit } from '@angular/core'
import { PreferencesService } from './preferences.service'
import { AppService } from '../app.service'

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss'],
  providers: [
    PreferencesService
  ]
})
export class PreferencesComponent implements OnInit {

  properties: any

  priorites: any[]
  allSelectedPriorite: boolean = true

  statuts: any[]
  allSelectedStatut: boolean = true
  
  constructor(private _preferencesService: PreferencesService, private _appService: AppService) { }

  ngOnInit() {
    /*
    this.properties = this._preferencesService.properties

    if(!this._appService.session.priorites) this._appService.getPriorites().then(data => {
      this._appService.session.priorites = data
      this.initPriorite(this._appService.session.priorites)
    })
    else this.initPriorite(this._appService.session.priorites)
    
    if(!this._appService.session.statuts) this._appService.getStatuts().then(data => {
      this._appService.session.statuts = data
      this.initStatuts(this._appService.session.statuts)
    })
    else this.initStatuts(this._appService.session.statuts)
    */
  }

  private initPriorite(data){
    this.priorites = data
    for (let i in this.priorites) {
      if (!this.priorites[i].etat) this.allSelectedPriorite = false
    }
  }

  private initStatuts(data){
    this.statuts = data
    for (let i in this.statuts) {
      if (!this.statuts[i].etat) this.allSelectedStatut = false
    }
  }

  allSelectedPrioriteChange(event) {
    this.allSelectedPriorite = event.checked
    for (let i = 0; i < this.priorites.length; i++) {
      this.priorites[i].etat = this.allSelectedPriorite
    }
    this.properties.isni_demandeList_priorites = JSON.stringify(this.priorites)
  }

  toogleChangePriorite(event, value) {
    if(!event.checked) this.allSelectedPriorite = false
    let allSelected = true
    for (let i = 0; i < this.priorites.length; i++) {
      if (this.priorites[i].value === value) this.priorites[i].etat = event.checked
      if (!this.priorites[i].etat) allSelected = false
    }
    if(allSelected) this.allSelectedPriorite = true
    this.properties.isni_demandeList_priorites = JSON.stringify(this.priorites)
  }

  allSelectedStatutChange(event) {
    this.allSelectedStatut = event.checked
    for (let i = 0; i < this.statuts.length; i++) {
      this.statuts[i].etat = this.allSelectedStatut
    }
    this.properties.isni_demandeList_statuts = JSON.stringify(this.statuts)
  }

  toogleChangeStatut(event, value) {
    if(!event.checked) this.allSelectedStatut = false
    let allSelected = true
    for (let i = 0; i < this.statuts.length; i++) {
      if (this.statuts[i].value === value) this.statuts[i].etat = event.checked
      if (!this.statuts[i].etat) allSelected = false
    }
    if(allSelected) this.allSelectedStatut = true
    this.properties.isni_demandeList_statuts = JSON.stringify(this.statuts)
  }


  save(properties) {
    this._preferencesService.properties = properties
  }
}
