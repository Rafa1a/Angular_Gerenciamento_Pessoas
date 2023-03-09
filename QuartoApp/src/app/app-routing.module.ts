import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Exemplo1Component} from './exemplo1/exemplo1.component'

const routes: Routes = [
  { path: 'exemplo1', component: Exemplo1Component },
  { path: '', redirectTo: '/exemplo1', pathMatch: 'full' },
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
