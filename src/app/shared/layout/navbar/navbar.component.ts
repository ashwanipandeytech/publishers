import { Component, OnInit, TemplateRef, ɵConsole } from '@angular/core';

import * as $ from 'jquery';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Globals } from 'src/app/shared/globals';
import { NavbarService } from './navbar.service'
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  modalRef: BsModalRef;
  isCollapsed = true;
  userInfo: any;
  currentBalance: number;

  constructor(
    public globals: Globals,
    private modalService: BsModalService,
    private navservice: NavbarService,
    private router: Router,
    private toastr: ToastrService,
    public dataService: DataService) {


    this.dataService.$balanceUpdate.pipe(takeUntil(this.destroyed$)).subscribe(response => {
      if (this.userInfo.username == 'superadmin' && response) {
        this.getuserList();
      }
    })
  }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('user'))
    if (this.userInfo.username != 'superadmin' && this.userInfo.status || this.userInfo.username == 'superadmin') {
     // this.getrechargeLog(this.userInfo);
    }
    if (this.userInfo.username == 'superadmin') {
      this.getuserList();
    } else {
      this.getuser()
    }
    $('.sidebar-wrapper').addClass('collapsed');
    $('#content').addClass('collapsed');
    $('.sidebar-wrapper').addClass('collapsed');
    //this.getEntryList()
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  switchCollapse(value) {
    this.isCollapsed = !value;
    // this.commonservice.changedmode(!value);
    if (!value) {
      $('.sidebar-wrapper').addClass('collapsed');
      // $('.left_side_content').addClass('collapsed');
      // $('.sidebar-header').addClass('collapsed');
      $('#content').addClass('collapsed');


    } else {
      $('.sidebar-wrapper').removeClass('collapsed');
      // $('.left_side_content').removeClass('collapsed');
      // $('.sidebar-header').removeClass('collapsed');
      $('#content').removeClass('collapsed');

    }

  }
  getrechargeLog(user) {
    let needToConsiderCheck = false;
    if (user.username == 'superadmin') {
      needToConsiderCheck = true;

    }
    const requestPayload = { email: user, needToConsiderCheck };
    this.dataService.callAdminApi(requestPayload, 'user/getrechargelog').pipe(takeUntil(this.destroyed$)).subscribe(data => {
      if (data.success) {



      } else {


      }
    }, error => {
      console.info('internal error');

    });
  }
  getuserList() {
    let balance = 0;
    let requestPayLoad;
    this.dataService.callApi(requestPayLoad, 'user/getuserlist').subscribe((response: any) => {
      if (response.success && response.data != '') {


        response.data.map(item => {
          balance = balance + Number(item.balance)

        })
        this.currentBalance = balance;


      } else {
        this.currentBalance = balance;
      }
localStorage.setItem('currentBalance',this.currentBalance.toString());
    }, (error: any) => {
      console.log('error during post is ', error)
    })
  }
  getuser() {
    let balance = 0;
    let requestPayLoad;
    requestPayLoad = {
      email: this.userInfo.email
    }
    this.dataService.callApi(requestPayLoad, 'user/getuser').subscribe((response: any) => {
      if (response.success && response.data != '') {


        this.currentBalance = response.data.balance;


      } else {
        this.currentBalance = balance;
      }
      localStorage.setItem('currentBalance',this.currentBalance.toString());
    }, (error: any) => {
      console.log('error during post is ', error)
    })
  }

}
