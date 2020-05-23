import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({ // essa anotação é quem esse arquivo ser o controlador da view
   selector: 'page-home'
  ,templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  // Quando for entrar nesta página, desabilita o menu
  ionViewWillEnter() { 
    this.menu.swipeEnable(false);
  } 
 
  // Quando for sair desta página, habilita o menu
  ionViewDidLeave() { 
    this.menu.swipeEnable(true);
  } 

  public login() {
    //this.navCtrl.push('CategoriasPage'); // empilha uma página em cima da outra.
    this.navCtrl.setRoot('CategoriasPage'); // empilha uma página em cima da outra.
  }

}
