import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { Platform } from 'ionic-angular';
import { LocalUser } from '../models/local_user';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {

    basePath = "/login";
    
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
            token: tok
        };
        this.storage.setLocalUser(user);
    }

    // remover o usuário do localStorage
    logout() {
        this.storage.setLocalUser(null);
    }
}