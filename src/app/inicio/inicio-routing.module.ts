import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },  {
    path: 'carrinho',
    loadChildren: () => import('../carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('../historico/historico.module').then( m => m.HistoricoPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
