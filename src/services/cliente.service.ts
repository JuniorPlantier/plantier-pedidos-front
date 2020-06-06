import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ClienteDTO } from '../models/cliente.dto';
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class ClienteService {

    basePath = "/clientes/email";

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    findByEmail(email: string) : Observable<ClienteDTO> {
        /*
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});
        

        return this.http.get<ClienteDTO>(
             `http://localhost:8080/clientes/email?value=${email}`
            ,{'headers': authHeader
        });
        */
       return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    getImageFromBucket(id: string) : Observable<any> {
        let url =  `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }
    
}