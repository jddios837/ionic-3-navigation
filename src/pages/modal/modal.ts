import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre: string;
  edad: number;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.nombre = this.navParams.get('nombre');
    this.edad = this.navParams.get('edad');

    console.log(this.nombre);
    console.log(this.edad);
  }

  cerrar_con_parametros() {
    let data = {
      nombre: "Manuel",
      edad: 12,
      coords: {
        lat: 10,
        lng: -10
      }
    }

    this.viewCtrl.dismiss(data);
  }

  cerrar_sin_parametros() {
    this.viewCtrl.dismiss();
  }

}
