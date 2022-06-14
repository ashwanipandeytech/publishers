"use strict";(self.webpackChunkcall_management=self.webpackChunkcall_management||[]).push([[688],{5688:(V,g,n)=>{n.r(g),n.d(g,{BalancelogModule:()=>K});var u=n(5318),p=n(9808),d=n(4521),m=n(1149),s=n(3547),f=n(7329),h=n(5439),_=(n(1158),n(2722)),C=n(4707),e=n(5e3),T=n(2468),Z=n(9193),B=n(8968),x=n(18),A=n(1223),v=n(6766);const y=["balancelogSort"],N=["balancelogPaginator"];function Y(a,l){if(1&a&&(e.TgZ(0,"div",24),e._uU(1),e.TgZ(2,"b"),e._uU(3),e.qZA(),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.hij(" ","BALANCE LOG"," "),e.xp6(2),e.hij("(TOTAL: ",t.totalEntry,") ")}}function b(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"mat-form-field",25),e.TgZ(1,"input",26),e.NdJ("keyup.enter",function(c){e.CHM(t);const i=e.oxw();return i.commonservice.applyFilter(c.target.value,i.balanceLog)}),e.qZA(),e.qZA()}}function R(a,l){1&a&&(e.TgZ(0,"mat-header-cell",27),e._uU(1),e.qZA()),2&a&&(e.xp6(1),e.hij(" ","DATE TIME"," "))}function D(a,l){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=l.$implicit;e.xp6(1),e.hij(" ",t.datetime," ")}}function U(a,l){1&a&&(e.TgZ(0,"mat-header-cell",27),e._uU(1),e.qZA()),2&a&&(e.xp6(1),e.hij(" ","EMAIL"," "))}function w(a,l){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=l.$implicit;e.xp6(1),e.hij(" ",t.email," ")}}function L(a,l){1&a&&(e.TgZ(0,"mat-header-cell",27),e._uU(1),e.qZA()),2&a&&(e.xp6(1),e.hij(" ","CREDITED"," "))}function S(a,l){if(1&a&&(e.TgZ(0,"span",29),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.amountRecharged," USD")}}function j(a,l){if(1&a&&(e.TgZ(0,"mat-cell"),e.YNc(1,S,2,1,"span",28),e.qZA()),2&a){const t=l.$implicit;e.xp6(1),e.Q6J("ngIf",t.isRechared)}}function E(a,l){1&a&&(e.TgZ(0,"mat-header-cell",27),e._uU(1),e.qZA()),2&a&&(e.xp6(1),e.hij(" ","BALANCE BEFORE"," "))}function Q(a,l){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=l.$implicit;e.xp6(1),e.hij(" ",t.balancebefore," ")}}function M(a,l){1&a&&(e.TgZ(0,"mat-header-cell",27),e._uU(1),e.qZA()),2&a&&(e.xp6(1),e.hij(" ","BALANCE AFTER"," "))}function I(a,l){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=l.$implicit;e.xp6(1),e.hij(" ",t.remainingBalance," ")}}function J(a,l){1&a&&(e.TgZ(0,"mat-header-cell",27),e._uU(1),e.qZA()),2&a&&(e.xp6(1),e.hij(" ","CURRENCY"," "))}function q(a,l){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=l.$implicit;e.xp6(1),e.hij(" ",t.currency," ")}}function O(a,l){1&a&&(e.TgZ(0,"mat-header-cell",27),e._uU(1),e.qZA()),2&a&&(e.xp6(1),e.hij(" ","EVENT"," "))}function H(a,l){if(1&a&&(e.TgZ(0,"mat-cell"),e.TgZ(1,"span",30),e._uU(2),e.qZA(),e.qZA()),2&a){const t=l.$implicit;e.xp6(1),e.Q6J("hidden",t.isRechared),e.xp6(1),e.hij(" ",t.id,"")}}function $(a,l){1&a&&(e.TgZ(0,"mat-header-cell",27),e._uU(1),e.qZA()),2&a&&(e.xp6(1),e.hij(" ","AMOUNT"," "))}function G(a,l){if(1&a&&(e.TgZ(0,"div"),e.TgZ(1,"div",32),e._uU(2),e.qZA(),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(2),e.hij(" -",t.pointspercall," ")}}function F(a,l){if(1&a&&(e.TgZ(0,"mat-cell"),e.YNc(1,G,3,1,"div",31),e.qZA()),2&a){const t=l.$implicit;e.xp6(1),e.Q6J("ngIf",!t.isRechared)}}function z(a,l){1&a&&e._UZ(0,"mat-header-row")}function P(a,l){1&a&&e._UZ(0,"mat-row")}const W=function(){return[25,50,100]},k=[{path:"",component:(()=>{class a{constructor(t,o,c,i){this.dataService=t,this.commonservice=o,this.toastr=c,this.modalService=i,this.onLoading=!0,this.displayedColumns=["username","email","phoneNo","status","balance","ACTION"],this.displayedbalancelogColumns=["datetime","credited","balancebefore","amount","balanceafter","CALLSALE"],this.collapseSideBar=!1,this.destroyed$=new C.t(1)}ngOnInit(){this.dataObject={id:"",email:"",amountRecharged:"",previousBalance:""},this.userInfo=JSON.parse(localStorage.getItem("user")),this.getrechargeLog(this.userInfo)}getrechargeLog(t){this.dataService.callAdminApi({email:t.email,needToConsiderCheck:!0},"user/getrechargelog").pipe((0,_.R)(this.destroyed$)).subscribe(i=>{i.success&&i.data.length>0&&(this.showlog=!0,this.logFor=t.email,i.data=i.data.reverse(),i.data.map(r=>{r.datetime=h(r.rechargedOn).format("DD-MM-YYYY HH:mm"),r.isRechared||(r.balancebefore=Number(r.remainingBalance)+Number(r.pointspercall))}),this.totalEntry=i.data.length,this.balanceLog=new m.by(i.data),this.balanceLog.sort=this.balancelogSort,this.balanceLog.paginator=this.balancelogPaginator)},i=>{console.info("internal error")})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(T.D),e.Y36(Z.v),e.Y36(B._W),e.Y36(x.tT))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-balancelog"]],viewQuery:function(t,o){if(1&t&&(e.Gf(s.YE,7),e.Gf(f.NW,7),e.Gf(y,5),e.Gf(N,5)),2&t){let c;e.iGM(c=e.CRH())&&(o.sort=c.first),e.iGM(c=e.CRH())&&(o.paginator=c.first),e.iGM(c=e.CRH())&&(o.balancelogSort=c.first),e.iGM(c=e.CRH())&&(o.balancelogPaginator=c.first)}},decls:38,vars:10,consts:[[1,"container-fluid","px-0"],[1,"row","no-gutters","h-100vh"],[1,"container"],[1,"content","custom-scroll","px-3"],[1,"mt-3",3,"hidden"],["class","h6",4,"ngIf"],["class","w-100",4,"ngIf"],[1,"mat-elevation-z8",3,"hidden"],["matSort","","color","primary",1,"table-container",3,"dataSource"],["balancelogSort","matSort"],["matColumnDef","datetime"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","email"],["matColumnDef","credited"],["matColumnDef","balancebefore"],["matColumnDef","balanceafter"],["matColumnDef","currency"],["matColumnDef","CALLSALE"],["matColumnDef","amount"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["balancelogPaginator",""],[1,"h6"],[1,"w-100"],["matInput","","placeholder","SEARCH",3,"keyup.enter"],["mat-sort-header",""],["class","text-success",4,"ngIf"],[1,"text-success"],[3,"hidden"],[4,"ngIf"],[1,"text-center","text-danger"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.YNc(5,Y,4,2,"div",5),e.YNc(6,b,2,0,"mat-form-field",6),e.TgZ(7,"div",7),e.TgZ(8,"mat-table",8,9),e.ynx(10,10),e.YNc(11,R,2,1,"mat-header-cell",11),e.YNc(12,D,2,1,"mat-cell",12),e.BQk(),e.ynx(13,13),e.YNc(14,U,2,1,"mat-header-cell",11),e.YNc(15,w,2,1,"mat-cell",12),e.BQk(),e.ynx(16,14),e.YNc(17,L,2,1,"mat-header-cell",11),e.YNc(18,j,2,1,"mat-cell",12),e.BQk(),e.ynx(19,15),e.YNc(20,E,2,1,"mat-header-cell",11),e.YNc(21,Q,2,1,"mat-cell",12),e.BQk(),e.ynx(22,16),e.YNc(23,M,2,1,"mat-header-cell",11),e.YNc(24,I,2,1,"mat-cell",12),e.BQk(),e.ynx(25,17),e.YNc(26,J,2,1,"mat-header-cell",11),e.YNc(27,q,2,1,"mat-cell",12),e.BQk(),e.ynx(28,18),e.YNc(29,O,2,1,"mat-header-cell",11),e.YNc(30,H,3,2,"mat-cell",12),e.BQk(),e.ynx(31,19),e.YNc(32,$,2,1,"mat-header-cell",11),e.YNc(33,F,2,1,"mat-cell",12),e.BQk(),e.YNc(34,z,1,0,"mat-header-row",20),e.YNc(35,P,1,0,"mat-row",21),e.qZA(),e._UZ(36,"mat-paginator",22,23),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("hidden",""==o.balanceLog&&o.showlog),e.xp6(1),e.Q6J("ngIf",""!=o.balanceLog),e.xp6(1),e.Q6J("ngIf",""!=o.balanceLog),e.xp6(1),e.Q6J("hidden",""==o.balanceLog),e.xp6(1),e.Q6J("dataSource",o.balanceLog),e.xp6(26),e.Q6J("matHeaderRowDef",o.displayedbalancelogColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedbalancelogColumns),e.xp6(1),e.Q6J("pageSizeOptions",e.DdM(9,W)))},directives:[p.O5,m.BZ,s.YE,m.w1,m.fO,m.Dz,m.as,m.nj,f.NW,A.KE,v.Nt,m.ge,s.nU,m.ev,m.XQ,m.Gk],styles:[".content[_ngcontent-%COMP%]{overflow:auto;height:calc(100vh - 70px)}"]}),a})()}];let X=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[d.Bz.forChild(k)],d.Bz]}),a})(),K=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[p.ez,u.m,X]]}),a})()}}]);