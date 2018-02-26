import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { DataTableModule, InputMaskModule, InputTextModule, CalendarModule, PanelModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { UsuarioService } from './usuario.service';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';


const routes: Routes = [
    { path: '', component: CadastroUsuariosComponent },
    { path: 'edit', component: EditarUsuariosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuariosComponent,
    EditarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { enableTracing: true }),

    DataTableModule,
    InputMaskModule,
    InputTextModule,
    CalendarModule,
    PanelModule
  ],
  providers: [
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
