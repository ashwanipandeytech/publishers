"use strict";(self.webpackChunkcall_management=self.webpackChunkcall_management||[]).push([[90],{2090:(Ye,d,r)=>{r.r(d),r.d(d,{UserModule:()=>qe});var C=r(5318),u=r(9808),f=r(4521),m=r(2340),c=r(1149),_=r(3547),g=r(7329),h=r(5439),T=(r(1158),r(2722)),x=r(4707),e=r(5e3),A=r(2468),U=r(9193),N=r(8968),b=r(18),y=r(1223),v=r(6766),p=r(3075);const q=["balancelogSort"],L=["balancelogPaginator"];function Y(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"mat-form-field",33),e.TgZ(1,"input",34),e.NdJ("keyup.enter",function(l){e.CHM(a);const i=e.oxw();return i.commonservice.applyFilter(l.target.value,i.userList)}),e.qZA(),e.qZA()}}function S(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","FIRST NAME"," "))}function w(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.firstname," ")}}function E(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","LAST NAME"," "))}function R(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.lastname," ")}}function D(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","PHONENO"," "))}function j(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.phoneNo," ")}}function M(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","EMAIL"," "))}function I(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.email," ")}}function J(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","USERNAME"," "))}function Q(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.username," ")}}function B(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","REGISTERED DATE"," "))}function O(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.registeredDate," ")}}function k(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","BALANCE"," "))}function H(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e._UZ(2,"span",36),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.balance," ")}}function $(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","APPROVAL STATUS"," "))}function F(t,n){1&t&&(e.TgZ(0,"b",39),e._uU(1," ACTIVE"),e.qZA())}function P(t,n){1&t&&(e.TgZ(0,"b",40),e._uU(1," INACTIVE"),e.qZA())}function G(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e.YNc(1,F,2,0,"b",37),e.YNc(2,P,2,0,"b",38),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.Q6J("ngIf",a.status),e.xp6(1),e.Q6J("ngIf",!a.status)}}function V(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","ACTION"," "))}const z=function(t,n){return{"btn-success":t,"btn-danger":n}};function K(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"mat-cell"),e.TgZ(1,"button",41),e.NdJ("click",function(){const i=e.CHM(a).$implicit,s=e.oxw(),Le=e.MAs(72);return s.openrehargeModal(i,Le)}),e._uU(2),e.qZA(),e.TgZ(3,"button",42),e.NdJ("click",function(){const i=e.CHM(a).$implicit;return e.oxw().getrechargeLog(i)}),e._uU(4),e.qZA(),e.TgZ(5,"button",43),e.NdJ("click",function(){const i=e.CHM(a).$implicit;return e.oxw().updatestatus(i)}),e._uU(6),e.qZA(),e.TgZ(7,"button",44),e.NdJ("click",function(){const i=e.CHM(a).$implicit;return e.oxw().deleteuser(i)}),e._UZ(8,"i",45),e.qZA(),e.qZA()}if(2&t){const a=n.$implicit;e.xp6(2),e.hij(" ","ADD BALANCE",""),e.xp6(2),e.hij(" ","BALANCE HISTORY",""),e.xp6(1),e.Q6J("ngClass",e.WLB(4,z,!a.status,a.status)),e.xp6(1),e.hij(" ",a.status?"DEACTIVATE":"ACTIVATE","")}}function W(t,n){1&t&&e._UZ(0,"mat-header-row")}function X(t,n){1&t&&e._UZ(0,"mat-row")}function ee(t,n){if(1&t&&(e.TgZ(0,"div",46),e._uU(1),e.TgZ(2,"span",39),e._uU(3),e.qZA(),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.hij(" ","BALANCE LOG",":"),e.xp6(2),e.hij(" ",a.logFor,"")}}function te(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"mat-form-field",33),e.TgZ(1,"input",34),e.NdJ("keyup.enter",function(l){e.CHM(a);const i=e.oxw();return i.commonservice.applyFilter(l.target.value,i.balanceLog)}),e.qZA(),e.qZA()}}function ae(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","DATE TIME"," "))}function ne(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.datetime," ")}}function oe(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","EMAIL"," "))}function le(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.email," ")}}function ie(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","CREDITED"," "))}function re(t,n){if(1&t&&(e.TgZ(0,"span",39),e._uU(1),e.qZA()),2&t){const a=e.oxw().$implicit;e.xp6(1),e.hij(" ",a.amountRecharged," USD")}}function ce(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e.YNc(1,re,2,1,"span",37),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.Q6J("ngIf",a.isRechared)}}function se(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","BALANCE BEFORE"," "))}function me(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.balancebefore," ")}}function pe(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","BALANCE AFTER"," "))}function ue(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.remainingBalance," ")}}function _e(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","CURRENCY"," "))}function de(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.hij(" ",a.currency," ")}}function fe(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","EVENT"," "))}function ge(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e.TgZ(1,"span",47),e._uU(2),e.qZA(),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.Q6J("hidden",a.isRechared),e.xp6(1),e.hij(" ",a.id,"")}}function he(t,n){1&t&&(e.TgZ(0,"mat-header-cell",35),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","AMOUNT"," "))}function Te(t,n){if(1&t&&(e.TgZ(0,"div",49),e.TgZ(1,"div",50),e.TgZ(2,"span",40),e._uU(3),e.qZA(),e.qZA(),e.qZA()),2&t){const a=e.oxw().$implicit;e.xp6(3),e.hij(" -",a.pointspercall,"")}}function Ze(t,n){if(1&t&&(e.TgZ(0,"mat-cell"),e.YNc(1,Te,4,1,"div",48),e.qZA()),2&t){const a=n.$implicit;e.xp6(1),e.Q6J("ngIf",!a.isRechared)}}function Ce(t,n){1&t&&e._UZ(0,"mat-header-row")}function xe(t,n){1&t&&e._UZ(0,"mat-row")}function Ae(t,n){1&t&&(e.TgZ(0,"span",40),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","AMOUNT IS INVALID"," "))}function Ue(t,n){if(1&t&&(e.TgZ(0,"div",64),e.YNc(1,Ae,2,1,"span",38),e.qZA()),2&t){e.oxw(2);const a=e.MAs(13);e.xp6(1),e.Q6J("ngIf",a.invalid&&a.errors.pattern)}}function Ne(t,n){if(1&t&&(e.TgZ(0,"div",33),e.YNc(1,Ue,2,1,"div",63),e.qZA()),2&t){e.oxw();const a=e.MAs(13);e.xp6(1),e.Q6J("ngIf",!(null!=a.errors&&a.errors.required)&&a.dirty)}}function be(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"div",51),e.TgZ(1,"h6",52),e._uU(2),e.qZA(),e.TgZ(3,"button",53),e.NdJ("click",function(){return e.CHM(a),e.oxw().modalRef.hide()}),e.TgZ(4,"span",54),e._uU(5,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",55),e.TgZ(7,"form",56,57),e.NdJ("ngSubmit",function(){return e.CHM(a),e.oxw().saveOrUpdatentry()}),e.TgZ(9,"div",58),e.TgZ(10,"div",49),e.TgZ(11,"mat-form-field",33),e.TgZ(12,"input",59,60),e.NdJ("ngModelChange",function(l){return e.CHM(a),e.oxw().dataObject.amountRecharged=l}),e.qZA(),e.qZA(),e.YNc(14,Ne,2,1,"div",3),e.TgZ(15,"div",61),e.TgZ(16,"button",62),e._uU(17," SAVE"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&t){const a=e.MAs(13),o=e.oxw();e.xp6(2),e.Oqu("ADD BALANCE"),e.xp6(10),e.s9C("placeholder","ENTER AMOUNT"),e.Q6J("ngModel",o.dataObject.amountRecharged),e.xp6(2),e.Q6J("ngIf",a.touched),e.xp6(2),e.Q6J("disabled",(null==a.errors?null:a.errors.required)||a.invalid&&a.errors.pattern)}}const Z=function(){return[25,50,100]},ye=[{path:"",component:(()=>{class t{constructor(a,o,l,i){this.dataService=a,this.commonservice=o,this.toastr=l,this.modalService=i,this.onLoading=!0,this.displayedColumns=["username","email","phoneNo","status","balance","ACTION"],this.displayedbalancelogColumns=["datetime","credited","balancebefore","amount","balanceafter","CALLSALE"],this.collapseSideBar=!1,this.destroyed$=new x.t(1),this.showlog=!1}ngOnInit(){this.dataObject={id:"",email:"",amountRecharged:"",previousBalance:""},this.userInfo=JSON.parse(localStorage.getItem("user")),this.getuserList(),this.getEntryList()}createUser(){let a=JSON.parse(JSON.stringify({apiKey:m.N.apiKey,apiSecret:m.N.apiSecret,applicationId:m.N.applicationId,privateKey:m.N.privateKey,name:"TESTUSER_"+Math.random(),display_name:"display_name_"+Math.random()}));this.dataService.callApi(a,"user/createuser").subscribe(o=>{console.log("response from post data is ",o),this.onLoading=!1,this.getuserList()},o=>{console.log("error during post is ",o)})}getuserListVonage(){let a=JSON.parse(JSON.stringify({apiKey:m.N.apiKey,apiSecret:m.N.apiSecret,applicationId:m.N.applicationId,privateKey:m.N.privateKey}));this.dataService.callApi(a,"user/getuserlistvonage").subscribe(o=>{console.log("response from post data is ",o),this.onLoading=!1,this.userList=new c.by(o),this.userList.sort=this.sort,this.userList.paginator=this.paginator},o=>{console.log("error during post is ",o)})}getuserList(){this.dataService.callApi(void 0,"user/getuserlist").subscribe(o=>{if(o.success&&""!=o.data){this.onLoading=!1;let l=[];o.data.map(i=>{i.phoneNo=i.Mobile.internationalNumber,i.registeredDate=h(i.registeredDate,"DD-MM-YYYY"),i.username!=this.userInfo.username&&l.push(i)}),this.userList=new c.by(l),this.userList.sort=this.sort,this.userList.paginator=this.paginator}else this.userList=[]},o=>{console.log("error during post is ",o)})}updatestatus(a){this.dataService.callApi(a,"user/updatestatus").subscribe(l=>{l.success&&(a.status=!a.status)},l=>{})}deleteuser(a){this.dataService.callApi(a,"user/deleteuser").subscribe(l=>{l.success&&(this.toastr.success("USER REMOVED"),this.getuserList())},l=>{})}openrehargeModal(a,o){let l=JSON.parse(JSON.stringify(a));this.dataObject.id=l._id,this.dataObject.email=l.email,this.dataObject.amountRecharged=l.balance,this.dataObject.remainingBalance=l.balance,this.modalRef=this.modalService.show(o,Object.assign({},{animated:!0,keyboard:!1,backdrop:!0,ignoreBackdropClick:!0},{class:"modal-sm"})),this.modalRef.content={},this.modalRef.content.data=a}saveOrUpdatentry(){let a=this.dataObject;a.isRechared=!0,a.remainingBalance=Number(a.remainingBalance)+Number(a.amountRecharged),this.dataService.callApi(a,"user/updatebalancelog").subscribe(o=>{o.success&&(this.toastr.success("BALANCE RECHARGED"),this.addUserBalance(a),this.modalRef.hide())},o=>{})}addUserBalance(a){let o=a;this.dataService.callApi(o,"user/addbalance").subscribe(l=>{l.success&&(this.getuserList(),this.dataService.emitBalanceUpdated(!0),this.modalRef.content.data.balance=Number(o.previousBalance)+Number(o.amountRecharged))},l=>{})}getEntryList(){let a=!1;"superadmin"!=this.userInfo.username&&(a=!0),this.dataService.callAdminApi({email:this.userInfo.email,needToConsiderCheck:a},"phone/entrylist").pipe((0,T.R)(this.destroyed$)).subscribe(l=>{l.success&&(this.entrylist=l.data)},l=>{console.info("internal error")})}getrechargeLog(a){this.dataService.callAdminApi({email:a.email,needToConsiderCheck:!0},"user/getrechargelog").pipe((0,T.R)(this.destroyed$)).subscribe(i=>{i.success&&i.data.length>0&&(this.showlog=!0,this.logFor=a.email,i.data.map(s=>{s.datetime=h(s.rechargedOn).format("DD-MM-YYYY HH:mm"),s.isRechared||(s.balancebefore=Number(s.remainingBalance)+Number(s.pointspercall))}),this.balanceLog=new c.by(i.data),this.balanceLog.sort=this.balancelogSort,this.balanceLog.paginator=this.balancelogPaginator)},i=>{console.info("internal error")})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(A.D),e.Y36(U.v),e.Y36(N._W),e.Y36(b.tT))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user"]],viewQuery:function(a,o){if(1&a&&(e.Gf(_.YE,7),e.Gf(g.NW,7),e.Gf(q,5),e.Gf(L,5)),2&a){let l;e.iGM(l=e.CRH())&&(o.sort=l.first),e.iGM(l=e.CRH())&&(o.paginator=l.first),e.iGM(l=e.CRH())&&(o.balancelogSort=l.first),e.iGM(l=e.CRH())&&(o.balancelogPaginator=l.first)}},decls:73,vars:18,consts:[[1,"container-fluid","px-0"],[1,"row","no-gutters","h-100vh"],[1,"content","w-100","custom-scroll","px-3"],["class","w-100",4,"ngIf"],[1,"mat-elevation-z8",3,"hidden"],["matSort","","color","primary",1,"table-container",3,"dataSource"],["matColumnDef","firstname"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","lastname"],["matColumnDef","phoneNo"],["matColumnDef","email"],["matColumnDef","username"],["matColumnDef","registeredDate"],["matColumnDef","balance"],["matColumnDef","status"],["matColumnDef","ACTION"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],[1,"mt-3",3,"hidden"],[1,"d-flex","align-content-center","justify-content-between"],["class","h6",4,"ngIf"],["balancelogSort","matSort"],["matColumnDef","datetime"],["matColumnDef","credited"],["matColumnDef","balancebefore"],["matColumnDef","balanceafter"],["matColumnDef","currency"],["matColumnDef","CALLSALE"],["matColumnDef","amount"],["balancelogPaginator",""],["rechargeModal",""],[1,"w-100"],["matInput","","placeholder","SEARCH",3,"keyup.enter"],["mat-sort-header",""],[1,"ml-"],["class","text-success",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-success"],[1,"text-danger"],[1,"btn","btn-sm","btn-success",3,"click"],[1,"btn","btn-sm","btn-primary","ml-2",3,"click"],[1,"btn","btn-sm","ml-2",3,"ngClass","click"],["title","REMOVE USER",1,"btn","btn-sm","btn","btn-outline-primary","ml-2",3,"click"],[1,"fas","fa-trash","text-danger"],[1,"h6"],[3,"hidden"],["class","col-md-12",4,"ngIf"],[1,"col-md-12"],[1,"text-center"],[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"ngSubmit"],["entryform","ngForm"],[1,"row"],["matInput","","name","rechargeamount","required","",3,"ngModel","placeholder","ngModelChange"],["rechargeamount","ngModel"],[1,"text-left"],[1,"btn","btn-sm","btn-primary",3,"disabled"],["class","error-msg",4,"ngIf"],[1,"error-msg"]],template:function(a,o){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.YNc(3,Y,2,0,"mat-form-field",3),e.TgZ(4,"div",4),e.TgZ(5,"mat-table",5),e.ynx(6,6),e.YNc(7,S,2,1,"mat-header-cell",7),e.YNc(8,w,2,1,"mat-cell",8),e.BQk(),e.ynx(9,9),e.YNc(10,E,2,1,"mat-header-cell",7),e.YNc(11,R,2,1,"mat-cell",8),e.BQk(),e.ynx(12,10),e.YNc(13,D,2,1,"mat-header-cell",7),e.YNc(14,j,2,1,"mat-cell",8),e.BQk(),e.ynx(15,11),e.YNc(16,M,2,1,"mat-header-cell",7),e.YNc(17,I,2,1,"mat-cell",8),e.BQk(),e.ynx(18,12),e.YNc(19,J,2,1,"mat-header-cell",7),e.YNc(20,Q,2,1,"mat-cell",8),e.BQk(),e.ynx(21,13),e.YNc(22,B,2,1,"mat-header-cell",7),e.YNc(23,O,2,1,"mat-cell",8),e.BQk(),e.ynx(24,14),e.YNc(25,k,2,1,"mat-header-cell",7),e.YNc(26,H,3,1,"mat-cell",8),e.BQk(),e.ynx(27,15),e.YNc(28,$,2,1,"mat-header-cell",7),e.YNc(29,G,3,2,"mat-cell",8),e.BQk(),e.ynx(30,16),e.YNc(31,V,2,1,"mat-header-cell",7),e.YNc(32,K,9,7,"mat-cell",8),e.BQk(),e.YNc(33,W,1,0,"mat-header-row",17),e.YNc(34,X,1,0,"mat-row",18),e.qZA(),e._UZ(35,"mat-paginator",19),e.qZA(),e.TgZ(36,"div",20),e.TgZ(37,"div",21),e.YNc(38,ee,4,2,"div",22),e.qZA(),e.YNc(39,te,2,0,"mat-form-field",3),e.TgZ(40,"div",4),e.TgZ(41,"mat-table",5,23),e.ynx(43,24),e.YNc(44,ae,2,1,"mat-header-cell",7),e.YNc(45,ne,2,1,"mat-cell",8),e.BQk(),e.ynx(46,11),e.YNc(47,oe,2,1,"mat-header-cell",7),e.YNc(48,le,2,1,"mat-cell",8),e.BQk(),e.ynx(49,25),e.YNc(50,ie,2,1,"mat-header-cell",7),e.YNc(51,ce,2,1,"mat-cell",8),e.BQk(),e.ynx(52,26),e.YNc(53,se,2,1,"mat-header-cell",7),e.YNc(54,me,2,1,"mat-cell",8),e.BQk(),e.ynx(55,27),e.YNc(56,pe,2,1,"mat-header-cell",7),e.YNc(57,ue,2,1,"mat-cell",8),e.BQk(),e.ynx(58,28),e.YNc(59,_e,2,1,"mat-header-cell",7),e.YNc(60,de,2,1,"mat-cell",8),e.BQk(),e.ynx(61,29),e.YNc(62,fe,2,1,"mat-header-cell",7),e.YNc(63,ge,3,2,"mat-cell",8),e.BQk(),e.ynx(64,30),e.YNc(65,he,2,1,"mat-header-cell",7),e.YNc(66,Ze,2,1,"mat-cell",8),e.BQk(),e.YNc(67,Ce,1,0,"mat-header-row",17),e.YNc(68,xe,1,0,"mat-row",18),e.qZA(),e._UZ(69,"mat-paginator",19,31),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(71,be,18,5,"ng-template",null,32,e.W1O)),2&a&&(e.xp6(3),e.Q6J("ngIf",""!=o.userList&&!o.onLoading),e.xp6(1),e.Q6J("hidden",""==o.userList||o.onLoading),e.xp6(1),e.Q6J("dataSource",o.userList),e.xp6(28),e.Q6J("matHeaderRowDef",o.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(16,Z)),e.xp6(1),e.Q6J("hidden",""==o.userList||!o.showlog),e.xp6(2),e.Q6J("ngIf",""!=o.balanceLog),e.xp6(1),e.Q6J("ngIf",""!=o.balanceLog),e.xp6(1),e.Q6J("hidden",""==o.balanceLog),e.xp6(1),e.Q6J("dataSource",o.balanceLog),e.xp6(26),e.Q6J("matHeaderRowDef",o.displayedbalancelogColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedbalancelogColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(17,Z)))},directives:[u.O5,c.BZ,_.YE,c.w1,c.fO,c.Dz,c.as,c.nj,g.NW,y.KE,v.Nt,c.ge,_.nU,c.ev,u.mk,c.XQ,c.Gk,p._Y,p.JL,p.F,p.Fj,p.Q7,p.JJ,p.On],styles:[""]}),t})()}];let ve=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.Bz.forChild(ye)],f.Bz]}),t})(),qe=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,C.m,ve]]}),t})()}}]);