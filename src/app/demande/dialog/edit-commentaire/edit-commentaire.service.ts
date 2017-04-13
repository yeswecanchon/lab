import { Injectable } from '@angular/core'
import { HttpDefaultService } from '../../../_utils'
import { AppConfig } from '../../../app.config'

@Injectable()
export class EditCommentaireService {

  constructor(private _httpService: HttpDefaultService){}

  updateComment(idComment: number, comment: string){
    return this._httpService.post(AppConfig.URL_UPDATE_COMMENT, {
      id: idComment,
      commentaire: comment
    })
  }

  deleteComment(idComment: number){
    return this._httpService.post(AppConfig.URL_DELETE_COMMENT(idComment))
  }

}
