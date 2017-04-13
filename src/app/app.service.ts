import { Injectable, EventEmitter } from '@angular/core'
import { HttpDefaultService } from './_utils'
import { AppConfig } from './app.config'

@Injectable()
export class AppService {

  eventEmitter: EventEmitter<any> = new EventEmitter()

  constructor(private _httpService: HttpDefaultService) { }

  private _agent
  set agent(data) {
    this._agent = data
  }
  get agent() {
    return this._agent
  }

  private _conf
  set conf(conf) {
    this._conf = conf
  }
  get conf() {
    return this._conf
  }

  private _statuts
  set statuts(statuts) {
    this._statuts = statuts
  }
  get statuts() {
    return this._statuts
  }

  private _priorites
  set priorites(priorites) {
    this._priorites = priorites
  }
  get priorites() {
    return this._priorites
  }

  private _session: any = {}
  set session(session) {
    this._session = session
  }
  get session() {
    return this._session
  }

  connect(){
    window.location.assign(AppConfig.URL_LOGIN(this.conf))
  }

  disconnect(): Promise<any> {
    return this._httpService.get(AppConfig.URL_LOGOUT)
  }

  getHabilitations(): Promise<any> {
    return this._httpService.get(AppConfig.URL_HABILITATIONS)
  }

  getConf(): Promise<any> {
    return this._httpService.get(AppConfig.URL_CONF)
  }

  getStatuts(): Promise<any> {
    return this._httpService.get(AppConfig.URL_STATUTS)
  }

  getPriorites(): Promise<any> {
    return this._httpService.get(AppConfig.URL_PRIORITES)
  }
  
}