import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Commonresponseobject } from '../shared/models';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  $balanceUpdate = new EventEmitter();
  $balance=new EventEmitter();
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Basic" + btoa(environment.apiKey + ":" + environment.apiSecret),

      'Content-Type': 'application/json'

    })
  };
  constructor(  private http: HttpClient,) { }

  callApi(requestPayLoad,endPoint){
    return this.http.post(environment.API_URL+endPoint, requestPayLoad)
  }
  callAdminApi(requestPayload,apiEndPoint){
    return this.http.post<Commonresponseobject>(environment.API_URL + apiEndPoint, requestPayload, this.httpOptions);
  }
  // createCall(requestPayLoad){
  //   return this.http.post(environment.apiUrl+'/api/phone/createcall', requestPayLoad)
  // }

  // getcallslog(requestPayLoad){
  //   return this.http.post(environment.apiUrl+'/api/phone/getcallslog', requestPayLoad, this.httpOptions
  //   )
  // }
  getreportlog(requestPayLoad){
    return this.http.post(environment.API_URL+'phone/getreportlog', requestPayLoad, this.httpOptions
    )
  }
  getreportrecord(requestPayLoad){
    return this.http.post(environment.API_URL+'phone/getreportrecord', requestPayLoad, this.httpOptions
    )
  }

  callApiMultipart(data) {
    let FILES=data['file'];
    const httpOptions = {
      headers: new HttpHeaders({
        // Accept: 'application/json,text/plain, */*',
        // Authorization: environment.Auth_Key,
      })
    };
    let formData: FormData = new FormData();
    // formData.append('application', environment.APPLICATION);
    // formData.append('uploadedby', data['uploadedby']);

      for (let i = 0; i < FILES.length; i++) {
       // console.info(FILES[i]);
        formData.append("uploads[]", FILES[i],FILES[i].name);
      }

      console.info(FILES,formData);//return false;
      let options = {
        headers: new HttpHeaders({})
      };
    return this.http.post(environment.API_URL + 'phone/upload', formData,httpOptions


    );
  }
  emitBalanceUpdated(data){
    this.$balanceUpdate.next(data);
  }
  emitBalance(data){
    this.$balance.next(data);
  }
}
