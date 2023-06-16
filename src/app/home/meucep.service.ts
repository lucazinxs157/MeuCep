import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MeuCepService {
  constructor(private http: HttpClient) {}

  localizaCep(cod: string) {
    const url = 'https://viacep.com.br/ws${cod}/json';

    const header = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.get(url, header);
  }
}
