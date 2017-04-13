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
    
    this.notice.zone.find(el => {return el.code === '000'}).souszone[0].concat[1].value = "#"
    this.notice.zone.find(el => {return el.code === '008'}).souszone[0].concat[1].value = "fr"
    this.notice.zone.find(el => {return el.code === '008'}).souszone[0].concat[2].value = "fre"
  }

  onPEPAutreClick() {
    this.notice.zone.find(el => {return el.code === '000'}).souszone[0].concat[1].value = "2"
    this.notice.zone.find(el => {return el.code === '008'}).souszone[0].concat[1].value = "xx"
    this.notice.zone.find(el => {return el.code === '008'}).souszone[0].concat[2].value = "und"
  }

  onCreerNoticeClick() {
    this._noticeAutoriteService.createNotice(this.demande.idDemande, this.notice).then((demande: Demande) => {
      if (demande) this.onDemandeChange.emit(demande)
    })
  }
}
