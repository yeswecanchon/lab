import { Component, OnInit } from '@angular/core';
import { AppService } from "app/app.service";

@Component({
  selector: 'app-denied',
  templateUrl: './denied.component.html',
  styleUrls: ['./denied.component.scss']
})
export class DeniedComponent implements OnInit {

  constructor(private _appService: AppService) { }

  ngOnInit() {
  }

  connect(){
    this._appService.connect()
  }

}
