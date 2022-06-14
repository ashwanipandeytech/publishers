import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from '../../src/app/guards/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch: 'full',
    data: { title: 'DASHBOARD' },
    canActivate: [AuthGuard],

  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    pathMatch: 'full',
    data: { title: 'USER' },
    canActivate: [AuthGuard],

  },
  {
    path: 'balancelog',
    loadChildren: () => import('./balancelog/balancelog.module').then(m => m.BalancelogModule),
    pathMatch: 'full',
    data: { title: 'BALANCE LOG' },
    canActivate: [AuthGuard],

  },
  {
    path: 'topup',
    loadChildren: () => import('./topup/topup.module').then(m => m.TopupModule),
    pathMatch: 'full',
    data: { title: 'TOP UP' },
    canActivate: [AuthGuard],

  },
  {
    path: 'call-entries',
    loadChildren: () => import('./callentries/callentries.module').then(m => m.CallentriesModule),
    pathMatch: 'full',
    data: { title: 'CALL ENTRIES' },
    canActivate: [AuthGuard],

  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    pathMatch: 'full',
    data: { title: 'ACCOUNT ENTRIES' },
    canActivate: [AuthGuard],

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
