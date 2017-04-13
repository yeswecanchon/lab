import { Component, OnInit, Optional } from '@angular/core'
import { MdDialogRef } from '@angular/material'
import { Statut } from '../../../_types'

@Component({
  selector: 'app-demande-edit-statut',
  templateUrl: './edit-statut.component.html',
  styleUrls: ['./edit-statut.component.scss']
})
export class EditStatutComponent implements OnInit {

  statuts: Statut[]
  statut: Statut
  statutIni: Statut

  constructor(@Optional() public dialogEditStatut: MdDialogRef<EditStatutComponent>) {}

  ngOnInit() {
    this.statutIni = this.statut

    switch(this.statutIni.value){    
      // Init ou EnCours => AStatuer
      case '1000':
      case '2000':
        this.statut = this.statuts.filter((statut: Statut) => { return statut.value == '2600' })[0]
      break
      // AStatuer => EnCours
      case '2600':
        this.statut = this.statuts.filter((statut: Statut) => { return statut.value == '2000' })[0]
      break
      default:
      break
    }
  }
}
