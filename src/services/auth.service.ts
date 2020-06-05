import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { LocalUser } from '../models/local_user';
import { StorageService } from './storage.service';
import { JwtHelper } from 'angular2-jwt';
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class AuthService {

    basePath = "/login";

    jwtHelper: JwtHelper = new JwtHelper();
    
    constructor( public http: HttpClient
                ,public storage: StorageService) {
    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(`${this.basePath}`, 
                        creds,
                        // para ter acesso ao header
                        {
                             observe: 'response'
                            ,responseType: 'text'
                        }
               );
    }

    refreshToken() {
        // o token é incluído automaticamente pelo interceptor
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`, 
            {},
            {
                observe: 'response',
                responseType: 'text' // para o framework não dar erro de parse
            });
    }

    // o que deve ser feito, quando o login é realizado com sucesso.
    successfullLogin(authorizationValue: string) {
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
    }

    // remover o usuário do localStorage
    logout() {
        this.storage.setLocalUser(null);
    }
}