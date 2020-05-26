import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { Platform } from 'ionic-angular';

@Injectable()
export class AuthService {

    basePath = "/login";
    
    constructor( public http: HttpClient) {
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
}