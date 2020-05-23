import { CategoriaService } from './../services/domain/categoria.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  // lista de componentes
  declarations: [
     MyApp
  ],
  // lista de módulos
  imports: [
     BrowserModule
    ,HttpClientModule
    ,IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  // Quando for uma página deve ser declarado aqui.
  entryComponents: [
     MyApp
  ],
  providers: [
     StatusBar
    ,SplashScreen
    ,{provide: ErrorHandler, useClass: IonicErrorHandler}
    ,CategoriaService
  ]
})
export class AppModule {}
