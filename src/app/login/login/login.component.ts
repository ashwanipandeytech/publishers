import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { CommonService } from '../../shared/common.service';
import { Subscription } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Globals } from '../../shared/globals';
import { FormGroup,NgForm } from '@angular/forms';
import { SearchCountryField, CountryISO,PhoneNumberFormat } from 'ngx-intl-tel-input';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  title = 'admin';
  username: any;
  password: any;
  vonageAppId:any;
  showloader: boolean;
  modalRef: any;
  otp: string;
  otpboxopen: boolean;
  loggedindetail: any;
  priviledgeState: object = {};
  alreadyHaveAccount: boolean = true;
   @ViewChild('registerForm') registerationForm;
   fg = new FormGroup({})
  modalconfig = {
    animated: true,
    keyboard: false,
    backdrop: 'static',
    ignoreBackdropClick: false
  };
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  separateDialCode = true;
  registerformdata = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password:'',
    mobile:''
  }
  countryname:any;

  constructor(private router: Router, private loginservice: LoginService, private modalService: BsModalService, private commonservice: CommonService, private toastr: ToastrService, public globals: Globals,public dataService :DataService) { }

  ngOnInit() {
    this.countryname=this.CountryISO['UnitedStates'];
    localStorage.clear();
  }
  loginUser() {
    this.showloader = true;
    const requestPayload = {
      username:this.username,
      password:this.password,
    }
    this.loginservice.callApi(requestPayload, 'user/login').pipe(takeUntil(this.destroyed$)).subscribe(data => {
      this.showloader = false;
      if (data.success) {
        this.loggedindetail = data;
        if(data.data.username!='superadmin' && !data.data.status){
          this.toastr.error('LOGIN NOT ALLOWED');
          return false
        }
        this.toastr.success(data.message.toUpperCase());
        this.router.navigate(['dashboard']);
        localStorage.setItem('user',JSON.stringify(data.data))
      } else {
        this.toastr.error(data.message.toUpperCase());
        // this.toastr.error(this.translate.instant('INVALID_USERNAME_OR_PASSWORD'));
      }
    }, error => {
      console.info('internal error');

    });
  }
  registerUser() {
    this.showloader = true;
   // const requestdata = JSON.parse(JSON.stringify(this.registerformdata))
    const requestPayload = JSON.parse(JSON.stringify(this.registerformdata))
   // requestPayload.registeredDate= Date.now()
    console.info(requestPayload);//return false;
    this.loginservice.callApi(requestPayload, 'user/register').pipe(takeUntil(this.destroyed$)).subscribe(data => {
    	this.showloader = false;
    	if (data.success) {
        this.toastr.success(data.message.toUpperCase());
        this.alreadyHaveAccount=true;
    	} else {
        this.toastr.error(data.message.toUpperCase());
    	}
    }, error => {
      this.toastr.error(error.message.toUpperCase());

    });
  }
  keyDownFunction(event, username, password, type) {
    if (event.keyCode == 13) {
      if (type == 'register') {
        this.registerUser();
      } else if (type == 'login') {
        this.loginUser();
      }

    }
  }
  resetUserForm(registerForm: NgForm,loginForm:NgForm) {
    loginForm.reset();
    loginForm.resetForm();
    loginForm.form.markAsPristine();
    this.registerformdata = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password:'',
      mobile:''

    }

    registerForm.reset();
    registerForm.resetForm();
    registerForm.form.markAsPristine();

    this.alreadyHaveAccount=!this.alreadyHaveAccount;


  }

  ngOnDestroy() {
    // Prevention of memory leaks
    this.destroyed$.next(true);
    this.destroyed$.complete();


  }
}
