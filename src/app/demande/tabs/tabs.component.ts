import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Demande } from '../../_types'

@Component({
  selector: 'app-demande-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class DemandeTabsComponent implements OnInit {

  @Input() demande: Demande
  @Output("onDemandeChange") onDemandeChange = new EventEmitter<Demande>();

  constructor() { }

  ngOnInit() {
  }

  _onDemandeChange(demande: Demande){
    this.onDemandeChange.emit(demande)
  }

}
