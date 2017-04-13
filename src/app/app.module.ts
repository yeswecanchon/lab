import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '@angular/material'
import 'hammerjs'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

import { AppComponent } from './app.component'
import { AppService } from './app.service'
import { AppRouting } from './app.routes'

import { OrderByPipe, KeysPipe } from './_pipes'
import { AppMaterialModule, HttpDefaultService, DialogComponent } from './_utils'
import { ContactComponent } from './contact'
import { DemandeComponent, DemandeTabsComponent } from './demande'
import {
  ShowHistoryComponent,
  EditPrioriteComponent,
  EditStatutComponent,
  EditNnaComponent,
  CancelDemandeComponent,
  AddCommentaireComponent,
  EditCommentaireComponent,
  ShowEanComponent
} from './demande/dialog'
import { DonneesCatalogueComponent, NoticeAutoriteComponent } from './demande/tabs'
import { DemandeListComponent, DemandeListSearchComponent } from './demande-list'
import { DeniedComponent } from './denied'
import { HomeComponent } from './home';
import { LogoutComponent } from './logout'
import { NotFoundComponent } from './not-found'
import { PreferencesComponent } from './preferences'
import { ProfilComponent } from './profil'

// TODO rem this when @angular/material update
import { NgxMyDatePickerModule  } from 'ngx-mydatepicker';


const APP_DEMANDE_LIST_COMPONENTS = [
  DemandeListSearchComponent
]

const APP_DEMANDE_COMPONENTS = [
  DemandeTabsComponent,
  ShowHistoryComponent,
  EditStatutComponent,
  EditPrioriteComponent,
  EditNnaComponent,
  CancelDemandeComponent,
  AddCommentaireComponent,
  EditCommentaireComponent,
  ShowEanComponent,
  DonneesCatalogueComponent,
  NoticeAutoriteComponent
]

const APP_UTILS_COMPONENTS = [
  DialogComponent
]

const APP_PIPES = [
  OrderByPipe,
  KeysPipe
]

const APP_DIALOG_COMPONENTS = [
  DialogComponent,
  ShowHistoryComponent,
  EditStatutComponent,
  EditPrioriteComponent,
  EditNnaComponent,
  CancelDemandeComponent,
  AddCommentaireComponent,
  EditCommentaireComponent,
  ShowEanComponent
]

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,  
    FlexLayoutModule,
    NgxDatatableModule,
    AppMaterialModule,
    AppRouting,
    NgxMyDatePickerModule
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    DemandeComponent,
    ...APP_DEMANDE_COMPONENTS,
    DemandeListComponent,
    ...APP_DEMANDE_LIST_COMPONENTS,
    DeniedComponent,
    HomeComponent,
    LogoutComponent,
    NotFoundComponent,
    PreferencesComponent,
    ProfilComponent,
    ...APP_UTILS_COMPONENTS,
    ...APP_PIPES,
    HomeComponent
  ],
  providers: [
    HttpDefaultService,
    AppService
  ],
  entryComponents: [
    ...APP_DIALOG_COMPONENTS
  ],
  bootstrap: [AppComponent, []]
})
export class AppModule { }
