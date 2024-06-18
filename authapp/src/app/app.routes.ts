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

export const routes: Routes = [

    {path:'', component: HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'comfirmotp', component: ConfirmotpComponent},
    {path:'forgetpassword', component: ForgetpasswordComponent},
    {path:'updatepassword', component: UpdatepasswordComponent},
    {path:'resetpassword', component: ResetpasswordComponent},
    {path:'user', component: UserComponent},
    {path:'customer', component: CustomerComponent},
];
