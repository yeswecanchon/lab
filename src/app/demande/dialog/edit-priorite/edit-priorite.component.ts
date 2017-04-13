import { Component, OnInit, Optional } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Priorite } from '../../../_types'

@Component({
  selector: 'app-demande-edit-priorite',
  templateUrl: './edit-priorite.component.html',
  styleUrls: ['./edit-priorite.component.scss']
})
export class EditPrioriteComponent implements OnInit {

  priorites: Priorite[]
  priorite: Priorite
  prioriteIni: Priorite

  commentaire: string

  constructor(@Optional() public dialogEditPriorite: MdDialogRef<EditPrioriteComponent>) {}

  ngOnInit() {
    this.priorite = this.priorites.filter((priorite: Priorite) => { return priorite.value == this.priorite.value })[0]
    this.prioriteIni = this.priorite
  }

  onPrioriteChange(){
    this.commentaire = `Priorité passée de ${this.prioriteIni.libelle} à ${this.priorite.libelle}`
  }

  onValiderClick(){
    this.dialogEditPriorite.close({
      prioriteValue: this.priorite.value,
      commentaire: this.commentaire
    })
  }
}
