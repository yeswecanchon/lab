import { Injectable } from '@angular/core'
import { HttpDefaultService } from '../../../_utils'
import { AppConfig } from '../../../app.config'

@Injectable()
export class DonneesCatalogueService {

    constructor(private _httpService: HttpDefaultService){}

    rechercheMotAutorite(idDemande: number, position, isReference, useDate){
      return this._httpService.post(AppConfig.URL_RECHERCHE_MOT_AUTORITE, {
        idDemande: idDemande,
        position: position,
        isReference: isReference,
        useDate: useDate
      })
    }

}
