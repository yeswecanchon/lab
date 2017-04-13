import { Injectable } from '@angular/core'
import { HttpDefaultService } from '../../../_utils'
import { AppConfig } from '../../../app.config'

@Injectable()
export class NoticeAutoriteService {

    constructor(private _httpService: HttpDefaultService){}

    generateNna(id: number){
      return this._httpService.get(AppConfig.URL_GENERATE_NNA(id))
    }

    createNotice(id: number, texteNNA: string){
      return this._httpService.post(AppConfig.URL_VALIDATE_TEXT_NNA(id), texteNNA)
    }
}
