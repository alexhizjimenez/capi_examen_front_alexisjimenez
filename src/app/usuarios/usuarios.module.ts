import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TablaUsuariosComponent],
  imports: [BrowserModule, CommonModule],
})
export class UsuariosModule {}
