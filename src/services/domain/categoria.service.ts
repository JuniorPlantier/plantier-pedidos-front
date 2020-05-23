import { API_CONFIG } from './../../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CategoriaDTO } from '../../models/categoria.dto';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoriaService {

    constructor(public hhtp: HttpClient) {
    }

    // a requisição http é assíncrona, ela é um AJAX.
    findAll() : Observable<CategoriaDTO[]> {
        // a crase permite colocar variáveis no meio da string sem concatenar com o operador +
        return this.hhtp.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}