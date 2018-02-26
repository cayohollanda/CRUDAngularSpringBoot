import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  api = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.api);
  }

  adicionar(item: any) {
    return this.http.post(this.api, item);
  }

  deletar(item: any) {
    return this.http.delete(this.api + '/' + item.id);
  }

  editar(item: any) {
    return this.http.put(this.api, item);
  }
}
