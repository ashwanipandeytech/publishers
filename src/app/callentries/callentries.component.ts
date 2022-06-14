import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import {DataService} from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CommonService } from '../shared/common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import "moment-timezone";
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-callentries',
  templateUrl: './callentries.component.html',
  styleUrls: ['./callentries.component.scss']
})


export class CallentriesComponent implements OnInit {
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
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  //  'This Month': [moment().startOf('month'), moment().endOf('month')],
   // 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  dataBackupArray=[]
  modelrange:any;
  start:any;
  end:any;
  callstatus:any;
  callerid:any;
  duration1:any;
  duration2:any;



  constructor(public dataService :DataService,public commonservice:CommonService, private modalService: BsModalService,private toastr: ToastrService) { }

  ngOnInit(): void {
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


  getEntryList(){
   let needToConsiderCheck=false;
    if(this.userInfo['username']!='superadmin'){
      needToConsiderCheck=true;

    }

    const requestPayload = {email:this.userInfo['email'],needToConsiderCheck};//JSON.parse(JSON.stringify(this.entryObject));
    this.dataService.callAdminApi(requestPayload, 'phone/entrylist').pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.showloader = false;
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

        if(data.data.length>0){
          this.totalManualEntry=data.data.length;
          this.dataBackupArray=JSON.parse(JSON.stringify(data.data))
          this.manualcallList = new MatTableDataSource(data.data);
           this.manualcallList.sort = this.manualentrySort;
           this.manualcallList.paginator = this.manualentryPaginator;
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
                this.showloader = false;
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
          this.showloader = false;
          if (data.success) {
           // this.toastr.success('log created');
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
filterData(){
  let backuparray=JSON.parse(JSON.stringify(this.dataBackupArray))
  let filterdata;



  if(this.modelrange && this.modelrange.start && this.modelrange.end){
    this.start=moment(this.modelrange.start['$d']).format('YYYY-MM-DD');
    this.end=moment(this.modelrange.end['$d']).format('YYYY-MM-DD');
    backuparray=  backuparray.filter(item=>{
      let dateTocheck=moment(item.datetime,'DD-MM-YYYY').format('YYYY-MM-DD')
      // console.info(
      //   this.start,
      //   moment(item.datetime,'DD-MM-YYYY').format('YYYY-MM-DD'),
      //   this.end,
      //   moment(moment(datecheck).format('YYYY-MM-DD')).isBetween(this.start, this.end)
      // )
     return moment(moment(dateTocheck).format('YYYY-MM-DD')).isBetween(this.start, this.end)


    })

    //     backuparray.map(item=>{
    //       item.datetime=  moment(item.datetime,'DD-MM-YYYY').format('DD-MM-YYYY');
    //       console.info(moment(item.datetime).isBetween(this.start, this.end))
    //       // moment(item.datetime).isBetween(this.start, this.end)
    // })
    console.info(backuparray)
  }
  if(this.callstatus){
    backuparray=  backuparray.filter(item=>item.status==this.callstatus)
   // console.info(backuparray)
  }

  if(this.callerid){
    backuparray= backuparray.filter(item=>item.clientphoneNo==this.callerid)
   // console.info(backuparray)
//    return false;

  }
  // if(this.duration1){
  //   console.info(this.duration1)
  //   backuparray= backuparray.filter(item=>item.duration>this.duration1)
  // }
  if(this.duration1 && this.duration2){




    backuparray=  backuparray.filter(item=>{
      item.durationinsec=Number(item.duration)*60

     return item.durationinsec>=this.duration1 &&item.durationinsec<=this.duration2

    }



      )
  }

console.info(backuparray)

this.manualcallList = new MatTableDataSource(backuparray);
this.manualcallList.sort = this.manualentrySort;
this.manualcallList.paginator = this.manualentryPaginator;
  //console.info(this.start,this.end,this.callstatus,this.callerid,this.duration1,this.duration2)
}
reset(){
  this.modelrange='';
  this.callstatus='';
  this.callerid='';
  this.duration1=''
  this.duration2='';
  this.getEntryList()

}
}
