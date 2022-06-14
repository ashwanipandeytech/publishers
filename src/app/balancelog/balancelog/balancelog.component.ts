import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import {DataService} from '../../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CommonService } from '../../shared/common.service';
import * as moment from 'moment';
import "moment-timezone";
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { json } from 'body-parser';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
@Component({
  selector: 'app-balancelog',
  templateUrl: './balancelog.component.html',
  styleUrls: ['./balancelog.component.scss']
})
export class BalancelogComponent implements OnInit {

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

  'credited',
  'balancebefore',
  'amount',
  'balanceafter',
  // 'currency',
  'CALLSALE'
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


    this.userInfo=JSON.parse(localStorage.getItem('user'))
   // this.getuserListVonage();

  this.getrechargeLog(this.userInfo)
  }


   getrechargeLog(user) {
    let needToConsiderCheck = true;

    const requestPayload = { email: user.email, needToConsiderCheck };
    this.dataService.callAdminApi(requestPayload, 'user/getrechargelog').pipe(takeUntil(this.destroyed$)).subscribe(data => {
      if (data.success) {
        if(data.data.length>0){
          this.showlog=true;
          this.logFor=user.email;
          data.data=data.data.reverse();
          data.data.map(item=>{
            item.datetime=moment(item.rechargedOn).format('DD-MM-YYYY HH:mm');
            if(!item.isRechared){
              item.balancebefore=Number(item.remainingBalance)+Number(item.pointspercall);
            }

          });
          this.totalEntry=data.data.length
          this.balanceLog = new MatTableDataSource(data.data);
           this.balanceLog.sort = this.balancelogSort;
           this.balanceLog.paginator = this.balancelogPaginator;
        }

      } else {


      }
    }, error => {
      console.info('internal error');

    });
  }
}

