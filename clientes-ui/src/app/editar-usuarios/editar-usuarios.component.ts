import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, NavigationExtras } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {

  usuario: Cliente;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Cliente) => {
        this.usuario = queryParams;
      }
    )
  }

  salvar(frm: FormControl) {
    this.usuarioService.editar(frm.value).subscribe((dados: Cliente) => {
      console.log(dados);
      this.router.navigateByUrl('/');
      
    });
  }
}
