import { Injectable } from '@angular/core'

@Injectable()
export class AppUtilsService {

    //Permet l'affichage de l'ISNI sous la forme 0000 0000 0000 0000
    public formatIsni(isni: string) {
        if (!isni) return null
        else return isni.match(/.{1,4}/g).join(' ')
    }
}