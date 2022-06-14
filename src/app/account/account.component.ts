import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { environment } from '../../environments/environment';
import {DataService} from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CommonService } from '../shared/common.service';
import * as moment from 'moment';
import "moment-timezone";
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { json } from 'body-parser';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  vonage:any;
  userList:any;
  onLoading:boolean=true;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    balanceLog:any
  displayedColumns: string[] = [
    'username',
    'email',
    'phoneNo',
    'status',
    'balance',
    'ACTION'
];
displayedbalancelogColumns: string[] = [
  'datetime',
  'email',
  'credited',

];
  collapseSideBar: boolean = false;
  userInfo: any;
  modalRef: BsModalRef;
  dataObject:{
    id:any,
    email:any,
    amountRecharged:any,
    previousBalance:any
  };

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  entrylist: any;
  @ViewChild('balancelogSort') balancelogSort: MatSort;
  @ViewChild('balancelogPaginator') balancelogPaginator: MatPaginator;
  showlog: boolean;
  logFor: any;
  totalEntry: any;
  constructor(public dataService :DataService,public commonservice:CommonService,private toastr: ToastrService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.dataObject={
      id:'',
      email:'',
      amountRecharged:'',
      previousBalance:''
    };
    console.info('test')


    this.userInfo=JSON.parse(localStorage.getItem('user'))
   // this.getuserListVonage();


  }


}
