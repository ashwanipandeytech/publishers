import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { environment } from '../../environments/environment';
import { Commonresponseobject } from '../shared/models';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({

      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'

    })
  };
  constructor(private http: HttpClient, protected localStorage: LocalStorage) { }

  isAuthenticated() {
    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))['_id'] != '') {
      return { validUser: true, redirectTologin: false };
    }
    else {
      return { validUser: false, redirectTologin: true };
    }
  }
  callApi(data, apiEndPoint) {
    const requestPayload = {
      application: environment.APPLICATION,

      data
    };
    const consolecolor = ' font-size:12px; font-weight: bold;padding:3px 2px;color:';
    console.log('%c' + apiEndPoint + ':', consolecolor + 'green');
    console.dir(apiEndPoint + ':' + JSON.stringify(requestPayload, null, 2));
    return this.http.post<Commonresponseobject>(environment.API_URL + apiEndPoint, requestPayload, this.httpOptions);
  }
}
