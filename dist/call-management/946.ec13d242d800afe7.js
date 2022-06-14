"use strict";(self.webpackChunkcall_management=self.webpackChunkcall_management||[]).push([[946],{8946:(X,s,l)=>{l.r(s),l.d(s,{TopupModule:()=>W});var u=l(9808),h=l(5318),d=l(4521),m=l(1149),r=l(3547),f=l(7329),g=l(5439),T=(l(1158),l(2722)),C=l(4707),e=l(5e3),Z=l(2468),_=l(9193),x=l(8968),A=l(18),v=l(1223),y=l(6766);const N=["balancelogSort"],Y=["balancelogPaginator"];function R(t,o){if(1&t&&(e.TgZ(0,"div",23),e._uU(1),e.TgZ(2,"b"),e._uU(3),e.qZA(),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.hij(" ","TOUPS"," "),e.xp6(2),e.hij("(TOTAL: ",a.totalEntry,") ")}}function S(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"mat-form-field",24),e.TgZ(1,"input",25),e.NdJ("keyup.enter",function(c){e.CHM(a);const i=e.oxw();return i.commonservice.applyFilter(c.target.value,i.balanceLog)}),e.qZA(),e.qZA()}}function U(t,o){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","DATE TIME"," "))}function b(t,o){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=o.$implicit;e.xp6(1),e.hij(" ",a.datetime," ")}}function D(t,o){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","EMAIL"," "))}function j(t,o){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=o.$implicit;e.xp6(1),e.hij(" ",a.email," ")}}function w(t,o){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","AMOUNT"," "))}function B(t,o){if(1&t&&(e.TgZ(0,"span",28),e._uU(1),e.qZA()),2&t){const a=e.oxw().$implicit;e.xp6(1),e.hij(" ",a.amountRecharged," USD")}}function L(t,o){if(1&t&&(e.TgZ(0,"mat-cell"),e.YNc(1,B,2,1,"span",27),e.qZA()),2&t){const a=o.$implicit;e.xp6(1),e.Q6J("ngIf",a.isRechared)}}function Q(t,o){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","BALANCE BEFORE"," "))}function E(t,o){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=o.$implicit;e.xp6(1),e.hij(" ",a.balancebefore," ")}}function M(t,o){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","BALANCE AFTER"," "))}function I(t,o){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=o.$implicit;e.xp6(1),e.hij(" ",a.remainingBalance," ")}}function J(t,o){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","CURRENCY"," "))}function H(t,o){if(1&t&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&t){const a=o.$implicit;e.xp6(1),e.hij(" ",a.currency," ")}}function O(t,o){1&t&&(e.TgZ(0,"mat-header-cell",26),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.hij(" ","EVENT"," "))}function q(t,o){if(1&t&&(e.TgZ(0,"mat-cell"),e.TgZ(1,"span",29),e._uU(2),e.qZA(),e.qZA()),2&t){const a=o.$implicit;e.xp6(1),e.Q6J("hidden",a.isRechared),e.xp6(1),e.hij(" ",a.id,"")}}function $(t,o){1&t&&e._UZ(0,"mat-header-row")}function F(t,o){1&t&&e._UZ(0,"mat-row")}const G=function(){return[25,50,100]},z=[{path:"",component:(()=>{class t{constructor(a,n,c,i){this.dataService=a,this.commonservice=n,this.toastr=c,this.modalService=i,this.onLoading=!0,this.displayedColumns=["username","email","phoneNo","status","balance","ACTION"],this.displayedbalancelogColumns=["datetime","email","credited"],this.collapseSideBar=!1,this.destroyed$=new C.t(1)}ngOnInit(){this.dataObject={id:"",email:"",amountRecharged:"",previousBalance:""},console.info("test"),this.userInfo=JSON.parse(localStorage.getItem("user")),this.getrechargeLog(this.userInfo)}getrechargeLog(a){let n;n="superadmin"!=this.userInfo.username,this.dataService.callAdminApi({email:a.email,needToConsiderCheck:n},"user/getrechargelog").pipe((0,T.R)(this.destroyed$)).subscribe(i=>{i.success&&i.data.length>0&&(this.showlog=!0,this.logFor=a.email,i.data=i.data.reverse(),i.data.map(p=>{p.datetime=g(p.rechargedOn).format("DD-MM-YYYY HH:mm"),p.isRechared||(p.balancebefore=Number(p.remainingBalance)+Number(p.pointspercall))}),i.data=i.data.filter(p=>p.isRechared),this.totalEntry=i.data.length,this.balanceLog=new m.by(i.data),this.balanceLog.sort=this.balancelogSort,this.balanceLog.paginator=this.balancelogPaginator)},i=>{console.info("internal error")})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(Z.D),e.Y36(_.v),e.Y36(x._W),e.Y36(A.tT))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-topup"]],viewQuery:function(a,n){if(1&a&&(e.Gf(r.YE,7),e.Gf(f.NW,7),e.Gf(N,5),e.Gf(Y,5)),2&a){let c;e.iGM(c=e.CRH())&&(n.sort=c.first),e.iGM(c=e.CRH())&&(n.paginator=c.first),e.iGM(c=e.CRH())&&(n.balancelogSort=c.first),e.iGM(c=e.CRH())&&(n.balancelogPaginator=c.first)}},decls:35,vars:10,consts:[[1,"container-fluid","px-0"],[1,"row","no-gutters","h-100vh"],[1,"container"],[1,"content","custom-scroll","px-3"],[1,"mt-3",3,"hidden"],["class","h6",4,"ngIf"],["class","w-100",4,"ngIf"],[1,"mat-elevation-z8",3,"hidden"],["matSort","","color","primary",1,"table-container",3,"dataSource"],["balancelogSort","matSort"],["matColumnDef","datetime"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","email"],["matColumnDef","credited"],["matColumnDef","balancebefore"],["matColumnDef","balanceafter"],["matColumnDef","currency"],["matColumnDef","CALLSALE"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["balancelogPaginator",""],[1,"h6"],[1,"w-100"],["matInput","","placeholder","SEARCH",3,"keyup.enter"],["mat-sort-header",""],["class","text-success",4,"ngIf"],[1,"text-success"],[3,"hidden"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.YNc(5,R,4,2,"div",5),e.YNc(6,S,2,0,"mat-form-field",6),e.TgZ(7,"div",7),e.TgZ(8,"mat-table",8,9),e.ynx(10,10),e.YNc(11,U,2,1,"mat-header-cell",11),e.YNc(12,b,2,1,"mat-cell",12),e.BQk(),e.ynx(13,13),e.YNc(14,D,2,1,"mat-header-cell",11),e.YNc(15,j,2,1,"mat-cell",12),e.BQk(),e.ynx(16,14),e.YNc(17,w,2,1,"mat-header-cell",11),e.YNc(18,L,2,1,"mat-cell",12),e.BQk(),e.ynx(19,15),e.YNc(20,Q,2,1,"mat-header-cell",11),e.YNc(21,E,2,1,"mat-cell",12),e.BQk(),e.ynx(22,16),e.YNc(23,M,2,1,"mat-header-cell",11),e.YNc(24,I,2,1,"mat-cell",12),e.BQk(),e.ynx(25,17),e.YNc(26,J,2,1,"mat-header-cell",11),e.YNc(27,H,2,1,"mat-cell",12),e.BQk(),e.ynx(28,18),e.YNc(29,O,2,1,"mat-header-cell",11),e.YNc(30,q,3,2,"mat-cell",12),e.BQk(),e.YNc(31,$,1,0,"mat-header-row",19),e.YNc(32,F,1,0,"mat-row",20),e.qZA(),e._UZ(33,"mat-paginator",21,22),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a&&(e.xp6(4),e.Q6J("hidden",""==n.balanceLog&&n.showlog),e.xp6(1),e.Q6J("ngIf",""!=n.balanceLog),e.xp6(1),e.Q6J("ngIf",""!=n.balanceLog),e.xp6(1),e.Q6J("hidden",""==n.balanceLog),e.xp6(1),e.Q6J("dataSource",n.balanceLog),e.xp6(23),e.Q6J("matHeaderRowDef",n.displayedbalancelogColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",n.displayedbalancelogColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(9,G)))},directives:[u.O5,m.BZ,r.YE,m.w1,m.fO,m.Dz,m.as,m.nj,f.NW,v.KE,y.Nt,m.ge,r.nU,m.ev,m.XQ,m.Gk],styles:[""]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.Bz.forChild(z)],d.Bz]}),t})(),W=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,h.m,P]]}),t})()}}]);