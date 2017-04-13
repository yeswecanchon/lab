import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  data: any = {}
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.data = this._appService.agent
  }
}
