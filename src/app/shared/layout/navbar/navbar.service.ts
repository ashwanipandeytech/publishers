import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Commonresponseobject } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  userid = JSON.parse(localStorage.getItem('user')).ID;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: environment.Auth_Key,
      'Content-Type': 'multipart/form-data'

    })
  };

  constructor(private http: HttpClient) { }
  callApi(data, apiEndPoint) {
    const requestPayload = {
      application: environment.APPLICATION,
      version: environment.VERSION,
      data
    };
    const consolecolor = 'font-size:12px; font-weight: bold;padding:3px 2px;color:';
    console.log('%c' + apiEndPoint + ':', consolecolor + 'green');
    console.dir(apiEndPoint + ':' + JSON.stringify(requestPayload, null, 2));
    return this.http.post<Commonresponseobject>(environment.API_URL + apiEndPoint, requestPayload, this.httpOptions);
  }
}
