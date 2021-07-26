import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseService } from '../providers/firebase';
import { CarrinhoPage } from './carrinho/carrinho.page';
import { HistoricoPage } from './historico/historico.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public router: Router,
    public firebase: FirebaseService,
    public modalController: ModalController
    
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
    });
  }

  async carrinho(){
    const modal = await this.modalController.create({
      component: CarrinhoPage,
    });
    return await modal.present();
  }

  async pedidos(){
    const modal = await this.modalController.create({
      component: HistoricoPage,
    });
    return await modal.present();
  }
 
  ngOnInit() {
   
  }
}
