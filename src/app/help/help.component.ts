import { Component, OnInit } from '@angular/core'
import { HelpService } from './help.service'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  providers:[
    HelpService
  ]
})
export class HelpComponent implements OnInit {

  data: string
  constructor(private _helpService: HelpService) { }

  ngOnInit() {
    this._helpService.getHelp().then(data => {
      this.data = data.contenu
    })
  }
}