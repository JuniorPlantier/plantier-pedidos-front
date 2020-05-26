import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { LocalUser } from '../models/local_user';
import { StorageService } from './storage.service';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    basePath = "/login";

    jwtHelper: JwtHelper = new JwtHelper();
    
    constructor( public http: HttpClient
                ,public storage: StorageService) {
    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(`${this.basePath}/login`, 
                        creds,
                        // para ter acesso ao header
                        {
                             observe: 'response'
                            ,responseType: 'text'
                        }
               );
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