import { Component, OnInit } from '@angular/core';
import { AppService } from "app/app.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _appService: AppService) { }

  ngOnInit() {
  }

  connect(){
    this._appService.connect()
  }
}
