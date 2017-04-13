import { Component, OnInit, Optional } from '@angular/core'
import { MdDialogRef } from '@angular/material'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  title: string
  icon: Object
  content: string
  overflowHidden: boolean = false
  text: string
  actions: Object

  constructor(
    @Optional() public dialog: MdDialogRef<DialogComponent>
  ) {}

  ngOnInit() {
  }

}
