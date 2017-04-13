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

  title: string = "Monster's"
  username: string = 'Romain MONSTERLET'

  constructor(
    private _appService: AppService,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  up() {
    window.scrollTo(0, 0)
  }

}
