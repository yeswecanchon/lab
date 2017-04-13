import { Injectable } from '@angular/core'
import { HttpDefaultService } from '../../../_utils'
import { AppConfig } from '../../../app.config'

@Injectable()
export class EditNnaService {

  constructor(private _httpService: HttpDefaultService){}

  deleteNna(id: number){
    return this._httpService.post(AppConfig.URL_DELETE_NNA(id), {})
  }

  prevalidateNna(id: number, nna: number){
    return this._httpService.get(AppConfig.URL_PRE_VALIDATE_NNA(id, nna))
  }

  validateNna(preValid: any){
    return this._httpService.post(AppConfig.URL_VALIDATE_NNA, preValid)
  }
}