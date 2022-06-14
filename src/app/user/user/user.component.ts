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
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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
  showlog: boolean=false;
  logFor: any;
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

    this.getuserList();
    this.getEntryList()

//     this.dataService.$balanceUpdate.pipe(takeUntil(this.destroyed$)).subscribe(response => {
// console.info(response);
//   })
  }

  createUser(){
    let requestPayLoad=JSON.parse(JSON.stringify({
      apiKey:environment.apiKey,
      apiSecret:environment.apiSecret,
      applicationId:environment.applicationId,
      privateKey:environment.privateKey,
      name:'TESTUSER_'+Math.random(),
      display_name:'display_name_'+Math.random()
    }));

    // "product": "VOICE-CALL",
    //       "account_id": req.body.apiKey
    this.dataService.callApi(requestPayLoad,'user/createuser').subscribe((response: any)=>{
      console.log('response from post data is ', response);
      this.onLoading=false;
      this.getuserList();
    },(error: any)=>{
      console.log('error during post is ', error)
    })
  }
  getuserListVonage(){
    let requestPayLoad=JSON.parse(JSON.stringify({
      apiKey:environment.apiKey,
      apiSecret:environment.apiSecret,
      applicationId:environment.applicationId,
      privateKey:environment.privateKey,
    }));
    this.dataService.callApi(requestPayLoad,'user/getuserlistvonage').subscribe((response: any)=>{
      console.log('response from post data is ', response);
      this.onLoading=false;

      this.userList = new MatTableDataSource(response);
      this.userList.sort = this.sort;
      this.userList.paginator = this.paginator;
    },(error: any)=>{
      console.log('error during post is ', error)
    })
  }

  getuserList(){
    let requestPayLoad;

    this.dataService.callApi(requestPayLoad,'user/getuserlist').subscribe((response: any)=>{
    if(response.success && response.data!=''){
      this.onLoading=false;
      let userlist=[]
      response.data.map(item=>{
        item.phoneNo=item.Mobile.internationalNumber;
        item.registeredDate=moment(item.registeredDate, 'DD-MM-YYYY');



        if(item.username!=this.userInfo['username']){
          userlist.push(item);
        }

      })
      this.userList = new MatTableDataSource(userlist);
      this.userList.sort = this.sort;
      this.userList.paginator = this.paginator;

    }else{
      this.userList=[]
    }

    },(error: any)=>{
      console.log('error during post is ', error)
    })
  }
  updatestatus(row){
    let requestPayLoad=row;
    this.dataService.callApi(requestPayLoad,'user/updatestatus').subscribe((response: any)=>{
    if(response.success ){

      row.status=!row.status

    }else{

    }

    },(error: any)=>{
    //  console.log('error during post is ', error)
    })

  }

  deleteuser(row){
    let requestPayLoad=row;
    this.dataService.callApi(requestPayLoad,'user/deleteuser').subscribe((response: any)=>{
    if(response.success ){
      this.toastr.success('USER REMOVED');
     this.getuserList();

    }else{

    }

    },(error: any)=>{
    //  console.log('error during post is ', error)
    })

  }

  openrehargeModal(row,template: TemplateRef<any>){

    let dataObject=JSON.parse(JSON.stringify(row));
    this.dataObject['id']=dataObject['_id']
    this.dataObject['email']=dataObject['email']
    this.dataObject['amountRecharged']=dataObject['balance'];
    this.dataObject['remainingBalance']=dataObject['balance'];
    this.modalRef = this.modalService.show(template, Object.assign({}, {
      animated: true,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    }, { class: 'modal-sm' }));
    this.modalRef.content = {};
    this.modalRef.content.data = row;


  }
  saveOrUpdatentry(){
    let requestPayLoad=this.dataObject;
    requestPayLoad['isRechared']=true;
    requestPayLoad['remainingBalance']=Number(requestPayLoad['remainingBalance'])+Number(requestPayLoad['amountRecharged'])
   // console.info(Number(requestPayLoad.previousBalance)+Number(requestPayLoad.amountRecharged));
   // return false;

    this.dataService.callApi(requestPayLoad,'user/updatebalancelog').subscribe((response: any)=>{
    if(response.success ){

      this.toastr.success('BALANCE RECHARGED');
      this.addUserBalance(requestPayLoad);

      this.modalRef.hide();

    }else{

    }

    },(error: any)=>{
    //  console.log('error during post is ', error)
    })

  }
  addUserBalance(row){
    let requestPayLoad=row;
    this.dataService.callApi(requestPayLoad,'user/addbalance').subscribe((response: any)=>{
    if(response.success ){
      this.getuserList();
      this.dataService.emitBalanceUpdated(true)
      this.modalRef.content.data['balance']=Number(requestPayLoad.previousBalance)+Number(requestPayLoad.amountRecharged);
      //row.status=!row.status

    }else{

    }

    },(error: any)=>{
    //  console.log('error during post is ', error)
    })

  }
  getEntryList(){
    let needToConsiderCheck=false;
     if(this.userInfo['username']!='superadmin'){
       needToConsiderCheck=true;

     }

     const requestPayload = {email:this.userInfo['email'],needToConsiderCheck};//JSON.parse(JSON.stringify(this.entryObject));
     this.dataService.callAdminApi(requestPayload, 'phone/entrylist').pipe(takeUntil(this.destroyed$)).subscribe(data => {

       if (data.success) {
         this.entrylist=data.data;
        // this.userList.map(item=>{

        //  let filterByEmail= entrylist.filter(innerItem=>innerItem.email==item.email);

        //  filterByEmail.map(items=>{

        //  })

        // })


       } else {

       }
     }, error => {
       console.info('internal error');

     });
   }
   getrechargeLog(user) {
    let needToConsiderCheck = true;
    // if (user.username == 'superadmin') {
    //   needToConsiderCheck = true;

    // }
    const requestPayload = { email: user.email, needToConsiderCheck };
    this.dataService.callAdminApi(requestPayload, 'user/getrechargelog').pipe(takeUntil(this.destroyed$)).subscribe(data => {
      if (data.success) {
        if(data.data.length>0){
          this.showlog=true;
          this.logFor=user.email;
          data.data.map(item=>{
            item.datetime=moment(item.rechargedOn).format('DD-MM-YYYY HH:mm');
            if(!item.isRechared){
              item.balancebefore=Number(item.remainingBalance)+Number(item.pointspercall);
            }

          })
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

