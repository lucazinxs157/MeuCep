import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MeuCepService } from '../services/meucep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public mensagem: AlertController,
    public nav: NavController,
    public cep: MeuCepService
  ) { }


  searchCEP(evento: any) {
    const cepDig = evento.detail.valeu;
  }
}
