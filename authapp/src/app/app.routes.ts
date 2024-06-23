import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ConfirmotpComponent } from './component/confirmotp/confirmotp.component';
import { RegisterComponent } from './component/register/RegisterComponent';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { UpdatepasswordComponent } from './component/updatepassword/updatepassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { UserComponent } from './component/user/user.component';
import { CustomerComponent } from './component/customer/customer.component';
import { authGuard } from './_guard/auth.guard';
import { AddcustomerComponent } from './component/addcustomer/addcustomer.component';

export const routes: Routes = [

    {path:'', component: HomeComponent, canActivate:[authGuard]},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'comfirmotp', component: ConfirmotpComponent},
    {path:'forgetpassword', component: ForgetpasswordComponent},
    {path:'updatepassword', component: UpdatepasswordComponent},
    {path:'resetpassword', component: ResetpasswordComponent},
    {path:'user', component: UserComponent, canActivate:[authGuard]},
    {path:'customer', component: CustomerComponent, canActivate:[authGuard]},
    {path:'customer/add', component: AddcustomerComponent, canActivate:[authGuard]},
    {path:'customer/edit/:code',component:AddcustomerComponent,canActivate:[authGuard]},
];
