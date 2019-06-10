import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarContatoComponent } from './contato/listar-contato/listar-contato.component';
import { SalvarContatoComponent } from './contato/salvar-contato/salvar-contato.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent, ListarContatoComponent, SalvarContatoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDggtGYnv_6vY1aQiTuGQt3UKR_n4us9ng",
     authDomain: "agenda-f83bd.firebaseapp.com",
     databaseURL: "https://agenda-f83bd.firebaseio.com",
     projectId: "agenda-f83bd",
     storageBucket: "",
     messagingSenderId: "645620888449",
     appId: "1:645620888449:web:a8da7cbd03a32189"
   }), AngularFireDatabaseModule
   ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
