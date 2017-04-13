import { Injectable } from '@angular/core'
import { HttpDefaultService } from '../_utils'
import { PreferencesService } from '../preferences'
import { ShortDemande } from '../_types'
import { AppConfig } from '../app.config'


class Filtre {
  constructor(
    public nom: string,
    public data: Array<string>,
  ) { }
}

@Injectable()
export class DemandeListService {

  constructor(
    private _httpService: HttpDefaultService,
    private _preferencesService: PreferencesService
  ) { }

  lastTimestamp: number

  getDemandes(sort: Object, offset: number, limit: number, searchItems: Object) {
    return this._httpService.post(AppConfig.URL_DEMANDES, this.getParams(sort, offset, limit, searchItems))
      .then(data => {

        if (!this.lastTimestamp || data.timestamp >= this.lastTimestamp) {

          this.lastTimestamp = data.timestamp

          let demandes = []
          let count = data.totalElements
          for (let i = 0; i < count; i++) {
            demandes[i] = undefined
          }
          const start = offset * limit;
          const end = start + limit;
          for (let i = start; i < end; i++) {
            demandes[i] = data.content[i - start] as ShortDemande;
          }
          return {
            demandes: demandes,
            totalStatuts: data.totalStatuts,
            count: count
          }
        }
      })
  }

  private getParams(sort: Object, offset: number, limit: number, searchItems: Object) {

    let filtres: Filtre[] = []
    if (searchItems) {
      this.addPrioriteParam(filtres, searchItems)
      this.addStatutParam(filtres, searchItems)
      this.addDateParam(filtres, searchItems)
      this.addNumeroParam(filtres, searchItems)
      this.addNomPrenomParam(filtres, searchItems)
      this.addExpediteurParam(filtres, searchItems)
      this.addEditeurParam(filtres, searchItems)
    }

    return {
      numeroPage: offset,
      nbLigneAffiche: limit,
      filtres: filtres,
      tri: sort,
      timestamp: +new Date()
    }
  }

  private addPrioriteParam(filtres: Filtre[], searchItems: any) {
    let priorites = searchItems.priorites.values
    if (priorites.length) {
      let data = []
      for (let i in priorites) {
        data.push(priorites[i].value)
      }
      filtres.push(new Filtre("priorite", data))
    }
  }

  private addStatutParam(filtres: Filtre[], searchItems: any) {
    let statuts = searchItems.statuts.values
    if (statuts.length) {
      let data = []
      for (let i in statuts) {
        data.push(statuts[i].value)
      }
      filtres.push(new Filtre("statut", data))
    }
  }

  private addDateParam(filtres: Filtre[], searchItems: any) {
    let dates = searchItems.dates.values
    if (dates.length) filtres.push(new Filtre("date", [dates[0].value.debut, dates[0].value.fin]))
  }

  private addNumeroParam(filtres: Filtre[], searchItems: any) {
    let numero = searchItems.numero.values
    if (numero.length) {
      let data = []
      for (let i in numero) {
        data.push(numero[i].value)
      }
      filtres.push(new Filtre("numero", data))
    }
  }

  private addNomPrenomParam(filtres: Filtre[], searchItems: any) {
    let auteur = searchItems.auteur.values
    if (auteur.length) filtres.push(new Filtre("nomPrenom", [auteur[0].value]))
  }

  private addExpediteurParam(filtres: Filtre[], searchItems: any) {
    let expediteur = searchItems.expediteur.values
    if (expediteur.length) filtres.push(new Filtre("expediteur", [expediteur[0].value]))
  }

  private addEditeurParam(filtres: Filtre[], searchItems: any) {
    let editeur = searchItems.editeur.values
    if (editeur.length) filtres.push(new Filtre("editeur", [editeur[0].value]))
  }
}
