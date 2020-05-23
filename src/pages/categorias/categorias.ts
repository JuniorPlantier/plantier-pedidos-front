import { CategoriaService } from './../../services/domain/categoria.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor( public navCtrl: NavController
              ,public navParams: NavParams
              ,public categoriaService: CategoriaService) {
  }

  // Qdo a página terminar de ser carregar, esse evento será executado
  ionViewDidLoad() {
    this.categoriaService.findAll()
     .subscribe(response => {
      // função de callback - executada qdo a requisição der sucesso.
      console.log(response);
     },
     error => {
       console.log(error);
     }); 
  }

}
