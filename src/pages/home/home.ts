import { AuthService } from './../../services/auth.service';
import { CredenciaisDTO } from './../../models/credenciais.dto';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({ // essa anotação é quem esse arquivo ser o controlador da view
   selector: 'page-home'
  ,templateUrl: 'home.html'
})
export class HomePage {

  // binding de dados 
  creds : CredenciaisDTO = {
     email: ""
    ,senha: ""
  }

  constructor( public navCtrl: NavController 
              ,public menu: MenuController
              ,public auth: AuthService) {

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
    
    this.auth.authenticate(this.creds)
      .subscribe(
          response =>  { // se sucesso
            //console.log(response.headers.get('Authorization'));
            this.auth.successfullLogin(response.headers.get('Authorization'));
            this.navCtrl.setRoot('CategoriasPage'); 
          },
          error => {
            console.log("deu ruim no login -> home.ts");
          }
      );
  }

}
