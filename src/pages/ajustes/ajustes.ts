import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from "../index.pagina";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
    ) {
  }

  activarPrincipal() {
    // Activar tab en posicion 1 
    this.navCtrl.parent.select(0);
  }

  mostraModal() {
    // creo la variable a enviar
    let informacion = {
      nombre: "Juan",
      edad: 31
    }
    // defino la pagina a cargar como modal y sus parametros
    let modal = this.modalCtrl.create(ModalPage, informacion);

    // muestro el modal
    modal.present();

    // al cerrar el modal se obtienen los parametros
    modal.onDidDismiss( parameters => {
      console.log('Data del modal ', parameters);
    })
  }

}
