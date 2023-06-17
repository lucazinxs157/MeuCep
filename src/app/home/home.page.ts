import { Component } from '@angular/core';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { MeuCepService } from '../services/meucep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dados: any = {};

  endereco = {
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    estado: '',
  };

  constructor(
    public mensagem: ToastController,
    public nav: NavController,
    private cep: MeuCepService
  ) {}

  searchCEP(evento: any) {
    const cepDig = evento.detail.value;
    if (cepDig.length == 8) {
      this.cep
        .localizaCep(cepDig)
        .then((resp) => {
          this.dados = resp;
          if (!this.dados || this.dados.erro) {
            this.exibeToast('CEP não encotrado', 'warning');
          } else {
            this.endereco.endereco = this.dados.logradouro;
            this.endereco.bairro = this.dados.bairro;
            this.endereco.cidade = this.dados.localidade;
            this.endereco.estado = this.dados.uf;
            
          }
        })
        .catch(() => {
          this.exibeToast('CEP não encotrado', 'warning');
        });
    }
  }

  cadastrar() {
    if(this.endereco.cidade == '' ||
      this.endereco.estado == '' ||    
      this.endereco.endereco == '' ||   
      this.endereco.cep == '' ||    
      this.endereco.bairro == ''     
    ){
      this.exibeToast('Preenche os campos necessarios', 'danger');
    }else{
      this.nav.navigateForward('conclusão')
  
      }  }

  async exibeToast(msg: string, cor: string) {
    const toast = await this.mensagem.create({
      message: msg,
      duration: 2000,
      position: 'top',
      animated: true,
      color: cor,
    });

    toast.present();
  }
}
