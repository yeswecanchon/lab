import { Injectable } from '@angular/core'
import { HttpDefaultService } from '../_utils'
import { AppConfig } from '../app.config'

@Injectable()
export class HelpService {

  constructor(private _httpService: HttpDefaultService) { }

  getHelp(): Promise<any>{
    return this._httpService.get(AppConfig.URL_HELP)
  }

}