import { Component } from '@angular/core';
import { MeuCepService } from '../home/meucep.service';
import { AlertController, NavController } from '@ionic/angular';

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
  ) {}


  searchCEP(evento){
    const cepDig = evento.detail.valeu;
  }
}
