import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public isLoading = new BehaviorSubject(false);
  $filterbuttonclicked = new EventEmitter();
  $hideTableColumnclicked = new EventEmitter();


  $displaycolumnsList = new BehaviorSubject([]);

  $emitusername = new EventEmitter();
  $userLoggedInorNot = new EventEmitter();
  $isDialogBoxClosed = new EventEmitter();
  private sidbarcollapsed = new BehaviorSubject(false);
  currentsidebarstate = this.sidbarcollapsed.asObservable();
  userid = (JSON.parse(localStorage.getItem('user')) == undefined) ? '0' : JSON.parse(localStorage.getItem('user')).ID;
  constructor(
    private http: HttpClient,
    private router: Router, ) {
  }


  emitDisplayColumn(data) {

    this.$displaycolumnsList.next(data);
  }
  emitHidedColumns(data) {
    // console.infoinfo(data);
    this.$hideTableColumnclicked.next(data);

  }






  applyFilter(filterValue: string, data) {
    console.info(filterValue);
    data.filter = filterValue.trim().toLowerCase();
  }




}



