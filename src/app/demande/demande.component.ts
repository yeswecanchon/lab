import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MdDialog } from '@angular/material'
import { ActivatedRoute, Params } from '@angular/router'
import { DemandeService } from './demande.service'
import { AppService } from '../app.service'
import { AppUtilsService, DialogComponent } from '../_utils'
import { ShortDemande, Demande, DonneesBiblio, Statut, Priorite } from '../_types'
import {
  ShowHistoryComponent,
  EditStatutComponent,
  EditPrioriteComponent,
  EditNnaComponent,
  CancelDemandeComponent,
  AddCommentaireComponent,
  EditCommentaireComponent,
  ShowEanComponent
} from './dialog'

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss'],
  providers: [
    DemandeService,
    AppUtilsService
  ]
})
export class DemandeComponent implements OnInit {

  constructor(
    private _demandeService: DemandeService,
    private _appService: AppService,
    private _dialog: MdDialog,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    public appUtilsService: AppUtilsService,
  ) { }

  demande: Demande
  donneesBiblio: DonneesBiblio

  resumeExpanded: boolean = false
  noteBibExpanded: boolean = false

  imgUrls

  nextDemandeHidden: boolean = false

  ngOnInit() {
    this.fetch()
    if(!this._appService.session.demandeList.demandes) this.nextDemandeHidden = true
  }

  fetch() {
    let shortDemande: ShortDemande = this._appService.session.demandeList.shortDemande
    if (shortDemande) {
      this._demandeService.getDemande(shortDemande.id).then((demande: Demande) => this.demande = demande)
      this._demandeService.getDonneesBiblio(shortDemande.idDecla).then((donneesBiblio: DonneesBiblio) => this.onDonneesBiblioLoaded(donneesBiblio))
    }
    else {
      // TODO debug purpose only, rem this later
      this._activatedRoute.params
        .switchMap((params: Params) => this._demandeService.getDemande(+params['id']))
        .subscribe((demande: Demande) => {
          this.demande = demande
          this._demandeService.getDonneesBiblio(this.demande.identifiantDecla).then((donneesBiblio: DonneesBiblio) => this.onDonneesBiblioLoaded(donneesBiblio))
        })
    }
  }

  onDonneesBiblioLoaded(donneesBiblio: DonneesBiblio) {
    this.donneesBiblio = donneesBiblio
    this.imgUrls = this._demandeService.getImgUrls(this.donneesBiblio, this._appService.conf.baseUrlCouv)
  }

  onDemandeChange(demande: Demande) {
    this.demande = demande
  }


  /**
   * @param direction : false = previous, true = next
   */
  onNextDemandeClick(direction: boolean) {

    if (this._appService.session.demandeList.shortDemande) {
      let i = (<any>this._appService.session.demandeList.shortDemande).$$index
      let dems: ShortDemande[] = this._appService.session.demandeList.demandes
      let nextDemande: ShortDemande = direction ? (dems[i + 1] || dems[0]) : (dems[i - 1] || dems[dems.length - 1])
      this._appService.session.demandeList.shortDemande = nextDemande
      this._router.navigate(['demande', nextDemande.id]).then(() => this.fetch())
    }
  }

  onShowHistoryClick() {
    let dialogShowHistory = this._dialog.open(ShowHistoryComponent)
    dialogShowHistory.componentInstance.historiques = this.demande.historiques
  }

  onEditStatutClick() {
    let dialogEditStatut = this._dialog.open(EditStatutComponent)
    dialogEditStatut.componentInstance.statuts = this._appService.session.statuts
    dialogEditStatut.componentInstance.statut = this.demande.statut
    dialogEditStatut.afterClosed().subscribe((newStatut: Statut) => {
      if (newStatut) this._demandeService.updateStatut(this.demande.idDemande, newStatut).then((demande: Demande) => this.demande = demande)
    })
  }

  onEditPrioriteClick() {
    let dialogEditPriorite = this._dialog.open(EditPrioriteComponent)
    dialogEditPriorite.componentInstance.priorites = this._appService.session.priorites
    dialogEditPriorite.componentInstance.priorite = this.demande.priorite
    dialogEditPriorite.afterClosed().subscribe((response: any) => {
      if (response) this._demandeService.updatePriorite(this.demande.idDemande, response).then((demande: Demande) => this.demande = demande)
    })
  }

  onEditNnaClick() {
    let dialogEditNna = this._dialog.open(EditNnaComponent, {
      disableClose: true
    })
    dialogEditNna.componentInstance.idDemande = this.demande.idDemande
    dialogEditNna.componentInstance.nna = this.demande.nna
    dialogEditNna.componentInstance.statut = this.demande.statut
    dialogEditNna.afterClosed().subscribe((demande: Demande) => {
      if (demande) this.demande = demande
    })
  }

  onSearchIsniClick() {
    this._demandeService.searchIsni(this.demande.idDemande)
      .then((demande: Demande) => this.demande = demande)
  }

  onCancelDemandeClick() {
    let dialogCancelDemande = this._dialog.open(CancelDemandeComponent)
    dialogCancelDemande.afterClosed().subscribe((comment: string) => {
      if (comment) this._demandeService.cancelDemande(this.demande.idDemande, comment).then((demande: Demande) => this.demande = demande)
    })
  }

  onRestoreDemandeClick() {
    let statutEnCours = this._appService.session.statuts.filter((statut: Statut) => statut.value === '2000')[0]
    this._demandeService.updateStatut(this.demande.idDemande, statutEnCours).then((demande: Demande) => this.demande = demande)
  }

  onAddCommentaireClick() {
    let dialogAddCommentaire = this._dialog.open(AddCommentaireComponent)
    dialogAddCommentaire.afterClosed().subscribe((comment: string) => {
      if (comment) this._demandeService.addComment(this.demande.idDemande, comment).then((demande: Demande) => this.demande = demande)
    })
  }

  onEditCommentaireClick() {
    let dialogEditCommentaire = this._dialog.open(EditCommentaireComponent, {
      disableClose: true
    })
    dialogEditCommentaire.componentInstance.demande = this.demande
    dialogEditCommentaire.afterClosed().subscribe((demande: Demande) => {
      if (demande) this.demande = demande
    })
  }

  onShowEanClick() {
    let dialogShowEan = this._dialog.open(ShowEanComponent)
    dialogShowEan.componentInstance.eanLie = this.demande.eanLie
  }

  zoom() {
    let dialog = this._dialog.open(DialogComponent)
    dialog.componentInstance.title = "Première de couverture"
    dialog.componentInstance.icon = {
      code: "book",
      color: "primary"
    }
    dialog.componentInstance.content = `<img src=${this.imgUrls.urlC1} />`
    dialog.componentInstance.overflowHidden = true
  }

  onOpenDeclaClick(idDecla: number) {
    window.open(this._demandeService.getSaisieDeclaUrl(idDecla, this._appService.conf.baseUrlDlWebapp))
  }

  onVoirOnixClick(idDecla: number) {
    this._demandeService.getOnix(idDecla).then(onix => {
      let dialog = this._dialog.open(DialogComponent)
      dialog.componentInstance.title = "Voir Onix"
      dialog.componentInstance.icon = {
        code: "remove_red_eye",
        color: "primary"
      }
      dialog.componentInstance.text = onix
      dialog.componentInstance.actions = {
        cancel: "Fermer"
      }
    })
  }
}