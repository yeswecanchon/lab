import { Component, OnInit } from '@angular/core'
import { AppService } from '../app.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: any = {}

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.data.version = this._appService.conf.version 
  }
}
