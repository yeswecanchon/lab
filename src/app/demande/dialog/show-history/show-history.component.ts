import { Component, OnInit, Optional } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-demande-show-history',
  templateUrl: './show-history.component.html',
  styleUrls: ['./show-history.component.scss']
})
export class ShowHistoryComponent implements OnInit {

  historiques

  constructor(@Optional() public dialogEditStatut: MdDialogRef<ShowHistoryComponent>) {}

  ngOnInit() {
  }

}
