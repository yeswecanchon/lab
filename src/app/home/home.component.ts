import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { MdDialog, MdButton } from '@angular/material'
import { DialogComponent } from '../_utils'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  time
  poutou: any = {}
  arthaud: any = {}
  hideCheminade: boolean = false

  constructor(private _dialog: MdDialog, private _sanitizer: DomSanitizer) { }


  ngOnInit() {
    let timeDiff = new Date("4/23/2017").getTime() - new Date().getTime()
    this.time = Math.ceil(timeDiff / (1000 * 3600 * 24))
  }

  onClick(name: string) {

    let icon
    let url
    let video
    let content
    switch (name) {
      case "Le Pen":
        video = 'v1mxMtr8Mws'
        break
      case "Fillon":
        video = '_4HILjdb6vM'
        break
      case "Macron":
        video = 'xeDKyl04G74'
        break
      case "Hamon":
        window.open('http://www.huffingtonpost.fr/2017/04/16/pour-jean-luc-melenchon-benoit-hamon-est-un-garcon-tres-intere_a_22041708/', '_blank')
        return
      case "Poutou":
        this.poutou.background = "#c9462c"
        this.poutou.color = "white"
        this.poutou.text = "Stanchon !"
        return
      case "Arthaud":
        this.arthaud.background = "#c9462c"
        this.arthaud.color = "white"
        this.arthaud.text = "Stanchon !"
        return
      case "Dupont Aignan":
        video = 'NIH4s3MPSgc'
        break
      case "Asselineau":
        content = `<img width='100%' src='./assets/img/chan.png' />`
        break
      case "Lasalle":
        content = `<img width='100%' src='./assets/img/kidding.png' />`
        break
      case "Mélenchon":
        content = `
        <div fxLayout="column" fxLayoutAlign="space-around center">
          <h2>Insoumise, Insoumis, il ne nous reste que très peu de temps pour convaincre. Echangez au maximum, partagez, faites bouger la ligne ! Le risque est réel, ne les laissez pas le cirque continuer. Votez et faites voter votre entourage !</h2>
          <img width='100%' src='./assets/img/stanchon.png' />
        </div>
        `
        break
    }

    let dialog = this._dialog.open(DialogComponent)
    dialog.componentInstance.title = name
    if (icon) dialog.componentInstance.icon = icon
    if (url || video) dialog.componentInstance.url = url || `https://www.youtube.com/embed/${video}?autoplay=1`
    if (content) dialog.componentInstance.content = content
    dialog.componentInstance.actions = {
      cancel: "Fermer"
    }

  }
}
