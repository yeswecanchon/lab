import { Injectable } from '@angular/core';
import { HttpDefaultService } from '../_utils';
import { AppConfig } from '../app.config'
import { DonneesBiblio, Statut, Priorite } from '../_types'

@Injectable()
export class DemandeService {

  constructor(private _httpService: HttpDefaultService) { }

  getDemande(id: number) {
    return this._httpService.get(AppConfig.URL_DEMANDE(id))
  }

  getDonneesBiblio(idDecla: string | number) {
    return this._httpService.get(AppConfig.URL_DONNEES_BIBLIO(idDecla))
  }

  updateStatut(id: number, newStatut: Statut) {
    return this._httpService.post(AppConfig.URL_UPDATE_STATUT, {
      idDemande: id,
      statutValue: newStatut.value
    })
  }

  updatePriorite(id: number, response: any) {
    return this._httpService.post(AppConfig.URL_UPDATE_PRIORITE(id), {
      prioriteValue: response.prioriteValue,
      commentaire: response.commentaire
    })
  }

  searchIsni(id: number){
    return this._httpService.get(AppConfig.URL_SEARCH_ISNI(id))
  }

  cancelDemande(id: number, comment: string) {
    return this._httpService.post(AppConfig.URL_CANCEL_DEMANDE(id), comment)
  }

  addComment(id: number, comment: string) {
    return this._httpService.post(AppConfig.URL_ADD_COMMENT(id), comment)
  }
  
  getSaisieDeclaUrl(idDecla: number, baseUrlDlWebapp: string) {
    return AppConfig.URL_SAISIE_DECLA(baseUrlDlWebapp, idDecla)
  }

  getOnix(idDecla: number){
    return this._httpService.get(AppConfig.URL_ONIX(idDecla))
  }

  getImgUrls(donneesBiblio: DonneesBiblio, baseUrlCouv: string) {
    return {
      urlC1Vignette: AppConfig.URL_COUV(baseUrlCouv, 1, 150, 150, donneesBiblio.idC1),
      urlC1: AppConfig.URL_COUV(baseUrlCouv, 1, 600, 600, donneesBiblio.idC1),
      urlC4: AppConfig.URL_COUV(baseUrlCouv, 4, 600, 600, donneesBiblio.idC4)
    }
  }
}