import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    const httpHeaders = new HttpHeaders().set('Authorization', 'Basic dXNlcjpwYXNzd29yZA==');
    return this.httpClient.get(environment.backendUrl,  
                                { headers: httpHeaders, responseType: 'text', observe: 'response', 
                                  withCredentials: true});
  }

  public sendPostRequest(){
    const httpHeaders = new HttpHeaders().set('Authorization', 'Basic dXNlcjpwYXNzd29yZA==');
    return this.httpClient.post(environment.backendUrl2, null, { headers: httpHeaders, responseType: 'text', 
                                  withCredentials: true });
  }

}