import { Component, OnInit, ChangeDetectorRef, ViewRef } from '@angular/core';
import { Globals } from '../../../shared/globals';
import * as $ from 'jquery';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';

import { Observable, Subscription, interval } from 'rxjs';
import { map, filter } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import "moment-timezone";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  collapseSideBar:any;
  userInfo: any;
  userPanelAllowed: boolean;
  constructor(private router: Router,
    public globals: Globals,
    public cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,
  )

  {  }

  ngOnInit() {
    this.userInfo=JSON.parse(localStorage.getItem('user'))
    this.collapseSideBar=false;


    if(this.userInfo['username']=='superadmin'){
      this.userPanelAllowed=true;

    }else{
      this.userPanelAllowed=false;
    }

  }


  ngOnDestroy() {
    //	Prevention of memory leaks

  }


}

