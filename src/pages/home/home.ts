import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({ // essa anotação é quem esse arquivo ser o controlador da view
   selector: 'page-home'
  ,templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public login() {
    //this.navCtrl.push('CategoriasPage'); // empilha uma página em cima da outra.
    this.navCtrl.setRoot('CategoriasPage'); // empilha uma página em cima da outra.
  }

}
