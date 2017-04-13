import { Component, OnInit, Optional } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-demande-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.scss']
})
export class AddCommentaireComponent implements OnInit {

  addCommentaireForm: FormGroup

  constructor( 
    @Optional() public dialogAddCommentaire: MdDialogRef<AddCommentaireComponent>,
    public formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.addCommentaireForm = this.formBuilder.group({
      'commentaire': ['', Validators.compose([Validators.required, Validators.maxLength(512)])]
    })
  }
}