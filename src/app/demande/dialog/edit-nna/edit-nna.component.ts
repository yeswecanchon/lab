import { Component, OnInit, Optional } from '@angular/core'
import { MdDialogRef, MdDialog, DialogRole } from '@angular/material'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { EditNnaService } from './edit-nna.service'
import { DialogComponent } from '../../../_utils'
import { Demande, Statut } from '../../../_types'

@Component({
  selector: 'app-demande-edit-nna',
  templateUrl: './edit-nna.component.html',
  styleUrls: ['./edit-nna.component.scss'],
  providers: [
    EditNnaService,
    FormBuilder
  ]
})
export class EditNnaComponent implements OnInit {

  nnaForm: FormGroup
  idDemande
  nna
  statut: Statut
  autoValid: boolean = false

  constructor(
    @Optional() public dialogEditNna: MdDialogRef<EditNnaComponent>,
    private _editNnaService: EditNnaService,
    public formBuilder: FormBuilder,
    private _dialog: MdDialog,
  ) { }

  ngOnInit() {

    this.nnaForm = this.formBuilder.group({
      'nna': [this.nna, Validators.compose([Validators.required, Validators.pattern('^[0-9]{8}$')])]
    })

    if(this.autoValid) this.onValiderClick()
  }

  onSupprimerClick() {

    let dialog = this._dialog.open(DialogComponent)
    dialog.componentInstance.title = "Vous allez supprimer le NNA de cette demande. Êtes-vous sûr ?"
    dialog.componentInstance.icon = {
      code: "warning",
      color: "accent"
    }
    dialog.componentInstance.actions = {
      cancel: "Non",
      ok: "Oui"
    }
    dialog.afterClosed().subscribe((yes) => {
      if (yes) this._editNnaService.deleteNna(this.idDemande).then((demande: Demande) => this.dialogEditNna.close(demande))
    })
  }

  onValiderClick() {
    this._editNnaService.prevalidateNna(this.idDemande, this.nnaForm.get('nna').value)
      .then(preValid => {
        if (preValid.message) {
          let dialog = this._dialog.open(DialogComponent)
          dialog.componentInstance.title = preValid.message
          dialog.componentInstance.icon = {
            code: "warning",
            color: "accent"
          }
          dialog.componentInstance.actions = {
            cancel: "Fermer"
          }
        }
        else {
          let dialog = this._dialog.open(DialogComponent)
          dialog.componentInstance.title = "Validation du NNA lié"
          dialog.componentInstance.icon = {
            code: "help",
            color: "primary"
          }
          dialog.componentInstance.text = `Vous êtes sur le point de mettre à jour la demande avec ce NNA : ${preValid.nna} (${preValid.nom}, ${preValid.prenom}, ${preValid.isni}). Êtes-vous sûr de vouloir continuer ?`
          dialog.componentInstance.actions = {
            cancel: "Non",
            ok: "Oui"
          }
          dialog.afterClosed().subscribe((yes) => {
            if (yes) this._editNnaService.validateNna(preValid).then((demande: Demande) => this.dialogEditNna.close(demande))
          })
        }
      })
  }
}
