import { Injectable } from '@angular/core'

const ISNI_PROPERTIES_LOCALSTORAGE_PREFIX = "isni_"

@Injectable()
export class PreferencesService {

  private _properties: any = {}

  constructor() { 
    for(let i = 0; i < window.localStorage.length; i++){
      let key = window.localStorage.key(i)
      if(key.startsWith(ISNI_PROPERTIES_LOCALSTORAGE_PREFIX)){
        this._properties[key] = window.localStorage.getItem(key)
      }
    }
  }

  get properties(){
    return this._properties
  }

  set properties(properties){
    for(let name in properties){
      localStorage.setItem(name, properties[name])
    }
    this._properties = properties
  }
}
