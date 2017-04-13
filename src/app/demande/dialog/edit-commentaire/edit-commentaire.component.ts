import { Component, OnInit, Optional } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { EditCommentaireService } from './edit-commentaire.service'


@Component({
  selector: 'app-demande-edit-commentaire',
  templateUrl: './edit-commentaire.component.html',
  styleUrls: ['./edit-commentaire.component.scss'],
  providers: [
    EditCommentaireService
  ]
})
export class EditCommentaireComponent implements OnInit {

  demande
  demandeFinal

  constructor(
    @Optional() public dialogEditCommentaire: MdDialogRef<EditCommentaireComponent>,
    private _editCommentaireService: EditCommentaireService
  ) {}

  ngOnInit() {
    
    this.demande = JSON.parse(JSON.stringify(this.demande)) // copy of data.demande
  }

  onSaveCommentClick(commentaire){
    this._editCommentaireService.updateComment(commentaire.id, commentaire.commentaire).then((demande) => {
      this.demande = demande
      this.demandeFinal = demande
      commentaire.edit = false
    })
  }

  onDeleteCommentClick(commentaire){
    this._editCommentaireService.deleteComment(commentaire.id).then((demande) => {
      this.demande = demande
      this.demandeFinal = demande
    })
  }
}
