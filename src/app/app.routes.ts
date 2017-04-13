import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './about'
import { ContactComponent } from './contact'
import { DemandeListComponent } from './demande-list'
import { DemandeComponent } from './demande'
import { DeniedComponent } from './denied'
import { HelpComponent } from './help'
import { LogoutComponent } from './logout'
import { NotFoundComponent } from './not-found'
import { PreferencesComponent } from './preferences'
import { ProfilComponent } from './profil'

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'demande-list',
    pathMatch: 'full'
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
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'about',
    component: AboutComponent
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