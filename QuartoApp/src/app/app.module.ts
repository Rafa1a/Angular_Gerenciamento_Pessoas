import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PessoaService} from './pessoa.service';
import { TabPessoaComponent } from './tab-pessoa/tab-pessoa.component';
import { ListPessoaComponent } from './list-pessoa/list-pessoa.component';
import { PanelPessoaComponent } from './panel-pessoa/panel-pessoa.component';
import { Exemplo1Component } from './exemplo1/exemplo1.component'


@NgModule({
  declarations: [
    AppComponent,
    TabPessoaComponent,
    ListPessoaComponent,
    PanelPessoaComponent,
    Exemplo1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
