import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatIconModule } from '@angular/material/icon';

import { NgtCanvas, NgtPiPipeModule } from '@angular-three/core';
import { NgtMesh } from '@angular-three/core/meshes';
import { NgtBoxGeometry } from '@angular-three/core/geometries';
import { NgtMeshBasicMaterial, NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { NgtAmbientLight, NgtSpotLight, NgtPointLight } from '@angular-three/core/lights';
import { NgtSobaFlyControls , NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtColorAttribute } from '@angular-three/core/attributes'
import { NgtPrimitive } from '@angular-three/core/primitive'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { SmartphoneComponent } from './contato/smartphone/smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreMimComponent,
    ProjetosComponent,
    FooterComponent,
    ContatoComponent,
    SmartphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgtCanvas,
    NgtPiPipeModule,
    NgtMesh,
    NgtBoxGeometry,
    NgtMeshBasicMaterial,
    NgtMeshStandardMaterial,
    NgtAmbientLight,
    NgtSpotLight,
    NgtPointLight,
    NgtSobaFlyControls,
    NgtSobaOrbitControls,
    NgtColorAttribute,
    NgtPrimitive,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
