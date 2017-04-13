import { Component, OnInit, EventEmitter } from '@angular/core'
import { Router } from "@angular/router"
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AppService
  ]
})
export class AppComponent implements OnInit {

  connected: boolean = false
  title: string = "Agence d'enregistrement ISNI"
  username: string = 'Anonyme'

  constructor(
    private _appService: AppService,
    private _router: Router
  ) { }

  ngOnInit() {

    /*if (!this._appService.conf) {
      this._appService.getConf().then(data => {
        this._appService.conf = data
        this.initAgent()
      })
    }*/
  }

  initAgent() {
    if (!this._appService.agent) {
      this._appService.getHabilitations().then(data => {
        this._appService.agent = data
        if (!data.login) {
          this.connect()
        }
        if (data.prenom && data.nom) {
          this.connected = true
          this.username = data.prenom + ' ' + data.nom
          this.initApp()
        }
      })
    }
  }

  initApp() {

    if (!this._appService.session.priorites) {
      this._appService.getPriorites().then(data => {
        this._appService.session.priorites = data
        this._appService.eventEmitter.emit({ option: 'onPrioritesLoaded' })
      })
    }
    if (!this._appService.session.statuts) {
      this._appService.getStatuts().then(data => {
        this._appService.session.statuts = data
        this._appService.eventEmitter.emit({ option: 'onStatutsLoaded' })
      })
    }
    this._appService.eventEmitter.emit({ option: 'onAppReady' })
    this._appService.session.appReady = true
  }

  up() {
    window.scrollTo(0, 0)
  }

  connect() {
    this._appService.connect()
  }

  disconnect() {
    this._appService.disconnect().then(res => {
      this.connected = false
      this.username = "Anonyme"
      this._router.navigate(['logout'])
    })
  }
}
