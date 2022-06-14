import { Component, OnInit, TemplateRef, ViewChild ,ChangeDetectorRef} from '@angular/core';
import { environment } from '../../../environments/environment';
import {DataService} from '../../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CommonService } from '../../shared/common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import "moment-timezone";
import { Chart } from 'chart.js';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;



  [x: string]: any;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  vonage:any;
  callList:any;
  manualcallList:any
  onLoading:boolean=true;
  modalRef: BsModalRef;
  entryObject:any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild('manualentrySort') manualentrySort: MatSort;
  @ViewChild('manualentryPaginator') manualentryPaginator: MatPaginator;
  displayedColumns: string[] = ['uuid','fromNumber', 'toNumber','direction','duration','rate','price', 'status'];
  displayedManualColumns: string[] = [
    'generatedId',
    'email',
    'status',
    'datetime',
    'duration',
    'offer',
    'merchant',
    'clientphoneNo',
    'forwardedNo',
    'pointspercall'
  ];
  showloader: boolean;
  userInfo: string;
  collapseSideBar: boolean = true;
  file: any;
  arrayBuffer: any;
  allowAccess:any;
  arrayList:any;



  totalUSDToday:any;
  totalUSDWeek:any;
  totalUSDMonth:any;

  totalCallToday:any;
  totalCallWeek:any;
  totalCallMonth:any;

  totalleadsToday:any;
  totalleadsWeek:any;
  totalleadsMonth:any;

  lastweekDate;
  lastMonthDate;
  dataBackupArray=[]

  filterBy:string='today';

  constructor(public dataService :DataService,public commonservice:CommonService, private modalService: BsModalService,private toastr: ToastrService,private changeDetectorRef: ChangeDetectorRef) { }

//   ngAfterViewInit() {
//     this.canvas = this.mychart.nativeElement;
//     this.ctx = this.canvas.getContext('2d');

//     new Chart(this.ctx, {
//       type: 'line',
//       data: {
//           datasets: [{
//               label: 'Current Vallue',
//               data: [0, 20, 40, 50],
//               backgroundColor: "rgb(115 185 243 / 65%)",
//               borderColor: "#007ee7",
//               fill: true,
//           },
//           {
//             label: 'Invested Amount',
//             data: [0, 20, 40, 60, 80],
//             backgroundColor: "#47a0e8",
//             borderColor: "#007ee7",
//             fill: true,
//         }],
//           labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
//       },
//   });
// }

  ngOnInit(): void {
    this.currentBalance=localStorage.getItem('currentBalance')

    this.lastweekDate = moment().subtract(7,'days').hours(0).format('DD-MM-YYYY');
    this.lastMonthDate = moment().subtract(30,'days').hours(0).format('DD-MM-YYYY');
    console.info(this.lastweekDate)

    this.userInfo=JSON.parse(localStorage.getItem('user'))
    if(this.userInfo){
      if(this.userInfo['username']=='superadmin'){
        this.allowAccess=true;
      }
    }

    this.entryObject={
      callername:'',
      callercountry:'',
      callerphoneNo:'',
      calledTo:'',
      enquiryDescription:'',
      callStatus:'NORMAL',
      createdBy:this.userInfo['_id']

    };

    this.callList=[]
    this.manualcallList=[]
 //  this.getcallslog();
   this.getEntryList();

    // this.getreportlog();
    //this.getreportrecord();
  }



  getcallslog(){
    let requestPayLoad=JSON.parse(JSON.stringify({
      apiKey:environment.apiKey,
      apiSecret:environment.apiSecret,
      applicationId:environment.applicationId,
      privateKey:environment.privateKey,
  }));
console.info(requestPayLoad)
    // "product": "VOICE-CALL",
    //       "account_id": req.body.apiKey
    this.dataService.callApi(requestPayLoad,'phone/getcallslog').subscribe((response: any)=>{
    //  console.log('response from post data is ', response);
      this.onLoading=false;
      response.map(item=>{
        item.fromNumber=item.from.number;
        item.toNumber=item.to.number;
      })
      this.callList = new MatTableDataSource(response);
      this.callList.sort = this.sort;
      this.callList.paginator = this.paginator;
    },(error: any)=>{
      console.log('error during post is ', error)
    })
  }
  createCall(){
    let requestPayLoad={
        apiKey:environment.apiKey,
        apiSecret:environment.apiSecret,
        applicationId:environment.applicationId,
        privateKey:environment.privateKey,
    }
    this.dataService.callApi(requestPayLoad,'phone/createcall').subscribe((response: any)=>{
      console.log('response from post data is ', response);
    },(error: any)=>{
      console.log('error during post is ', error)
    })
  }

  getreportlog(){
    let requestPayLoad=JSON.parse(JSON.stringify({
      product: "VOICE-CALL",
      account_id:environment.apiKey,
       apiSecret:environment.apiSecret,
       JWT:environment.JWT,
      // applicationId:environment.applicationId,
      // privateKey:environment.privateKey,
  }))


  // "product": "VOICE-CALL",
  //       "account_id": req.body.apiKey
 // console.info(requestPayLoad)
  this.dataService.callApi(requestPayLoad,'phone/getreportlog').subscribe((response: any)=>{
    console.log('response from post data is ', response);
  },(error: any)=>{
    console.log('error during post is ', error)
  })
  }

  getreportrecord(){
    let requestPayLoad=JSON.parse(JSON.stringify({
      product: "VOICE-CALL",
      account_id:environment.apiKey,
      apiSecret:environment.apiSecret,
      applicationId:environment.applicationId,
  }));


  // "product": "VOICE-CALL",
  //       "account_id": req.body.apiKey
  this.dataService.callApi(requestPayLoad,'phone/getreportrecord').subscribe((response: any)=>{
    console.log('response from post data is ', response);
  },(error: any)=>{
    console.log('error during post is ', error)
  })
  }
  openEntryModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, Object.assign({}, {
      animated: true,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    }, { class: 'modal-lg' }));
  }
  saveOrUpdatentry(){
    const requestPayload = JSON.parse(JSON.stringify(this.entryObject));
    this.dataService.callAdminApi(requestPayload, 'phone/createentry').pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.showloader = false;
      if (data.success) {
        this.toastr.success(data.message.toUpperCase());
        this.modalRef.hide();
        this.getEntryList();

      } else {
        this.toastr.error(data.message.toUpperCase());
        // this.toastr.error(this.translate.instant('INVALID_USERNAME_OR_PASSWORD'));
      }
    }, error => {
      console.info('internal error');

    });
  }
  getEntryList(){
   let needToConsiderCheck=false;
    if(this.userInfo['username']!='superadmin'){
      needToConsiderCheck=true;

    }

    const requestPayload = {email:this.userInfo['email'],needToConsiderCheck};//JSON.parse(JSON.stringify(this.entryObject));
    this.dataService.callAdminApi(requestPayload, 'phone/entrylist').pipe(takeUntil(this.destroyed$)).subscribe(data => {
   //   this.showloader = false;
      if (data.success) {
       // this.dataService.emitEntry(data.data)
        this.manualcallList=[];
        let  todaysDate=moment().format('DD-MM-YYYY');

        let currentDaterecord=data.data.filter(item=>item.datetime==todaysDate);

        let currentArrayDaterecord=data.data.filter(item=>item.datetime==todaysDate);


        this.totalCallToday=currentDaterecord.length;
        this.totalleadsToday=currentDaterecord.filter(item=>item.duration>30).length
        this.totalUSDToday=0;
        currentArrayDaterecord.map(item=>{
          this.totalUSDToday= this.totalUSDToday+Number(item.pointspercall);
         // console.info(this.totalUSDToday)

        })
        console.info(currentArrayDaterecord)
        this.dataBackupArray=JSON.parse(JSON.stringify(data.data))
        if(data.data.length>0){
          this.totalManualEntry=data.data.length;
           this.dataBackupArray=JSON.parse(JSON.stringify(data.data))
          this.manualcallList = new MatTableDataSource(data.data);
           this.manualcallList.sort = this.manualentrySort;
           this.manualcallList.paginator = this.manualentryPaginator;
           this.filterBy='today';
           this.filterData('today')
        }

      } else {
        this.manualcallList=[]
        this.totalManualEntry=0;
       // this.toastr.error(data.message.toUpperCase());
        // this.toastr.error(this.translate.instant('INVALID_USERNAME_OR_PASSWORD'));
      }
    }, error => {
      console.info('internal error');

    });
  }
  getNumberRegex() {
    return /^[0-9]{1,10}$/;
  }
  selectFile(event){
    console.info('test')

    this.file= event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    this.showloader=true;
this.changeDetectorRef.detectChanges()
    fileReader.onload = (e) => {
      //event.preventDefault()
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
       // console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
      // xslxData=XLSX.utils.sheet_to_json(worksheet,{raw:true});
     //  console.info('called')
          var arraylist = XLSX.utils.sheet_to_json(worksheet,{raw:true});
          arraylist.map(item=>{
            item['uploadedBy']=this.userInfo['_id'];

            //item['datetime']= moment(item['datetime'],'DD-MM-YYYY HH:mm:ss').format('DD-MM-YYYY HH:mm:ss')
            console.info(moment(item['datetime']));
            item['generatedId']=Math.floor(100000 + Math.random() * 900000)
          })
        //  return false;
              this.filelist = [];
              const requestPayload={
                uploadedBy:this.userInfo['_id'],
                arraylist
              }
              this.arrayList=arraylist;

              const uniqueUsers = [...new Set(arraylist.map(item => item['email']))];
              let arrayToUpdate=[]
              if(uniqueUsers.length>0){
                let filterData=JSON.parse(JSON.stringify(arraylist))

                uniqueUsers.map(item=>{
                 let specificData= filterData.filter(itemfilter=>itemfilter.email==item)
                 let balanceused=0;
                 specificData.map(inneritem=>{
                  balanceused=balanceused+Number(inneritem.pointspercall)

                 })
                  arrayToUpdate.push({'email':item,'subsctractAmount':balanceused,})
                })
              }
              //requestPayload['arrayToUpdate']=arrayToUpdate;

            //  console.info(arrayToUpdate);return false;

              this.dataService.callAdminApi(requestPayload, 'phone/createentry').pipe(takeUntil(this.destroyed$)).subscribe(data => {

                if (data.success) {
                   this.toastr.success(data.message.toUpperCase());
                  // this.modalRef.hide();
                  this.getEntryList();
                  arrayToUpdate.map(item=>{
                    this.setbalanceHistory(item);
                  //  this.updateBalance(item)
                  })


                } else {
                  this.toastr.error(data.message.toUpperCase());
                  // this.toastr.error(this.translate.instant('INVALID_USERNAME_OR_PASSWORD'));
                }
              }, error => {
                console.info('internal error');

              });
              return true;


}

}

updateBalance(arrayToUpdate){
 // console.info(arrayToUpdate);return false;
  this.dataService.callAdminApi(arrayToUpdate, 'user/updatebalance').pipe(takeUntil(this.destroyed$)).subscribe(data => {
    this.showloader = false;
    if (data.success) {
   //  this.setbalanceHistory(arrayToUpdate)
     this.dataService.emitBalanceUpdated(true)

    } else {
      this.toastr.error(data.message.toUpperCase());
      // this.toastr.error(this.translate.instant('INVALID_USERNAME_OR_PASSWORD'));
    }
  }, error => {
    console.info('internal error');

  });


}
setbalanceHistory(arrayToUpdate){

    let balance = 0;
    let requestPayLoad;
    requestPayLoad = {
      email: arrayToUpdate.email
    }
    this.dataService.callApi(requestPayLoad, 'user/getuser').subscribe((response: any) => {
      if (response.success && response.data != '') {
        let remainingBalance = response.data.balance;
        let data=[];
        this.arrayList.map(item=>{

          if(item.email==arrayToUpdate.email){
            remainingBalance=Number(remainingBalance)-Number(item.pointspercall)

            data.push({
              id:item.generatedId,
              email:item.email,
              remainingBalance:remainingBalance,
              pointspercall:item.pointspercall

            })

          }
        })
      //  console.info(data);return false
        let requestPayLoad={
          data:data,
          multi:true
        }
        this.dataService.callAdminApi(requestPayLoad, 'user/updatebalancelog').pipe(takeUntil(this.destroyed$)).subscribe(data => {
         // this.showloader = false;
          if (data.success) {
          //  this.toastr.success('log created');
         //  this.setbalanceHistory(arrayToUpdate)
         this.updateBalance(arrayToUpdate)



          } else {
          //  this.toastr.error(data.message.toUpperCase());
            // this.toastr.error(this.translate.instant('INVALID_USERNAME_OR_PASSWORD'));
          }
        }, error => {
          console.info('internal error');

        });
      } else {
        this.currentBalance = balance;


      }

    }, (error: any) => {
      console.log('error during post is ', error)
    })



}

// _this.lastWeek = function () {
//   var result = moment().subtract(7,'days').hours(0);
//   return result._d;
// };

// _this.lastMonth = function () {
//   var result = moment().subtract(30,'days').hours(0);
//   return result._d;
// };

filterData(value){

  if(value=='today'){
   // JSON.parse(JSON.stringify(this.dataBackupArray))
    let backuparray=JSON.parse(JSON.stringify(this.dataBackupArray));
    let  todaysDate=moment().format('DD-MM-YYYY');
    let currentDaterecord=backuparray.filter(item=>item.datetime==todaysDate);
    let currentArrayDaterecord=backuparray.filter(item=>item.datetime==todaysDate);


    this.totalCallToday=currentDaterecord.length;
    this.totalleadsToday=currentDaterecord.filter(item=>item.duration>30).length
    this.totalUSDToday=0;
    currentArrayDaterecord.map(item=>{
      this.totalUSDToday= this.totalUSDToday+Number(item.pointspercall);
     // console.info(this.totalUSDToday)

    })
    this.manualcallList = new MatTableDataSource(currentDaterecord);
    this.manualcallList.sort = this.manualentrySort;
    this.manualcallList.paginator = this.manualentryPaginator;




  }else if(value=='lastweek'){
    let backuparray=JSON.parse(JSON.stringify(this.dataBackupArray))
    let weekDaterecord=backuparray.filter(item=>moment(item.datetime)>moment(this.lastweekDate));
    let weekArrayDaterecord=weekDaterecord;//this.dataBackUpArray.filter(item=>item.datetime==todaysDate);
    this.totalCallWeek=weekArrayDaterecord.length;
    this.totalleadsWeek=weekDaterecord.filter(item=>item.duration>30).length;
    console.info(this.totalCallWeek,this.totalleadsWeek)
    this.totalUSDToday=0;
    weekDaterecord.map(item=>{
      this.totalUSDWeek= this.totalUSDToday+Number(item.pointspercall);
     // console.info(this.totalUSDToday)

    })
    this.manualcallList = new MatTableDataSource(weekDaterecord);
    this.manualcallList.sort = this.manualentrySort;
    this.manualcallList.paginator = this.manualentryPaginator;

  }


}

}
