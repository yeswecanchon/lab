import { Component, OnInit, ViewChildren, Input, Output, EventEmitter } from '@angular/core'
import { MdDialogRef } from '@angular/material'
import { ActivatedRoute, Params } from '@angular/router'
import { NoticeAutoriteService } from './notice-autorite.service'
import { AppService } from '../../../app.service'
import { Demande } from '../../../_types'

@Component({
  selector: 'app-demande-tabs-notice-autorite',
  templateUrl: './notice-autorite.component.html',
  styleUrls: ['./notice-autorite.component.scss'],
  providers: [
    NoticeAutoriteService
  ]
})
export class NoticeAutoriteComponent implements OnInit {

  @Input() demande: Demande
  @Output("onDemandeChange") onDemandeChange = new EventEmitter<Demande>();

  @ViewChildren('input') inputs;

  notice

  constructor(
    private _noticeAutoriteService: NoticeAutoriteService,
    private _appService: AppService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this._activatedRoute.params
      .switchMap((params: Params) => this._noticeAutoriteService.generateNna(+params['id']))
      .subscribe(notice => {
        this.notice = notice
      })
  }

  onPEPFrancaiseClick() {
    this.inputs.toArray().find(el => { return el.nativeElement.getAttribute('id') === '000-0-1' }).nativeElement.value = "#"
    this.inputs.toArray().find(el => { return el.nativeElement.getAttribute('id') === '008-0-1' }).nativeElement.value = "fr"
    this.inputs.toArray().find(el => { return el.nativeElement.getAttribute('id') === '008-0-2' }).nativeElement.value = "fre"
  }

  onPEPAutreClick() {
    this.inputs.toArray().find(el => { return el.nativeElement.getAttribute('id') === '000-0-1' }).nativeElement.value = "2"
    this.inputs.toArray().find(el => { return el.nativeElement.getAttribute('id') === '008-0-1' }).nativeElement.value = "xx"
    this.inputs.toArray().find(el => { return el.nativeElement.getAttribute('id') === '008-0-2' }).nativeElement.value = "und"
  }

  onCreerNoticeClick() {
    this._noticeAutoriteService.createNotice(this.demande.idDemande, this.notice).then((demande: Demande) => {
      if (demande) this.onDemandeChange.emit(demande)
    })
  }
}
