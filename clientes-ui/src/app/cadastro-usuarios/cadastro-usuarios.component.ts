import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormControl } from '@angular/forms';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  itens = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.usuarioService.listar()
      .subscribe(dados => this.itens = dados);
  }

  adicionar(frm: FormControl) {
    this.usuarioService.adicionar(frm.value).subscribe(() => {
      frm.reset();
      this.listar();
    });
  }

  deletar(item: any) {
    this.usuarioService.deletar(item).subscribe(() => {
      this.listar();
    });
  }

  editar(item: any) {
    this.router.navigate(['/edit'], { queryParams: item });
  }
}
