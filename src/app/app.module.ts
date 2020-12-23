import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImmatriculationComponent } from './immatriculation/immatriculation.component';
import { IdentificationComponent } from './identification/identification.component';
import { EtatComponent } from './etat/etat.component';
import { FichetechComponent } from './fichetech/fichetech.component';
import { CondamnationComponent } from './condamnation/condamnation.component';
import { ReparationComponent } from './reparation/reparation.component';
import { DeplacementComponent } from './deplacement/deplacement.component';
import { RecensementComponent } from './recensement/recensement.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ImmatriculationComponent,
    IdentificationComponent,
    EtatComponent,
    FichetechComponent,
    CondamnationComponent,
    ReparationComponent,
    DeplacementComponent,
    RecensementComponent,
    UtilisateurComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
