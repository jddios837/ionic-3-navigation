import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../pagina3/pagina3';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3: any = Pagina3Page;

  mutantes: any[] = [
    {
      nombre: "Magneto",
      poder: "Controlar Metales"
    }, 
    {
      nombre: "Wolverine",
      poder: "Regeneración acelerada"
    },
    {
      nombre: "Profesor X",
      poder: "Poderes psiquicos"
    },
    {
      nombre: "Gambito",
      poder: "Cargar objetos inanimados con energia"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  irPagina3(mutante: any) {
    this.navCtrl.push( Pagina3Page, { 'mutante': mutante});
    // console.log(mutante);
  }

}
