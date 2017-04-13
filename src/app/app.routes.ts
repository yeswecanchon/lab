import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ContactComponent } from './contact'
import { DemandeListComponent } from './demande-list'
import { DemandeComponent } from './demande'
import { DeniedComponent } from './denied'
import { HomeComponent } from "./home"
import { LogoutComponent } from './logout'
import { NotFoundComponent } from './not-found'
import { PreferencesComponent } from './preferences'
import { ProfilComponent } from './profil'

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'demande-list',
    component: DemandeListComponent
  },
  {
    path: 'demande/:id',
    component: DemandeComponent
  },
  {
    path: 'preferences',
    component: PreferencesComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'denied',
    component: DeniedComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)