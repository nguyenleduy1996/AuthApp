import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import {  loginresp, menu, menupermission, menus, menuuserpermission, registerconfirm, resetpassword, roles, updatepassword, updateuser, usercred, userregister, users } from '../_model/user.model';
import { Subject, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public $refreshToken = new Subject<boolean>;
  public $refreshTokenReceived = new Subject<boolean>;

  constructor(private http: HttpClient, private router:Router) {

    this.$refreshToken.subscribe((res:any)=> {
      this.getRefreshToken()
    })
  }
  

  baseUrl = environment.apiUrl

  _registerresp = signal<registerconfirm>({
    userid: 0,
    username: '',
    otptext: ''
  })
  _username = signal('');
  _menulist = signal<menu[]>([]);

  _Multimenulist = signal<menuuserpermission[]>([]);
  

  getRefreshToken()   {
    let input = {
      "token": this.getToken(),
      "refreshToken": this.GetRefreshToken(),
      "userRole": this.GetRole()
    }
    this.http.post( this.baseUrl+ "Authorize/GenerateRefreshToken", input).subscribe((Res:any)=>{
      this.SaveTokens(Res)
      this.$refreshTokenReceived.next(true);
      window.location.reload(); // load lại tráng cho tình cảm
    })
  } 


  Userregisteration(_data:userregister){
    return this.http.post(this.baseUrl+'User/userregisteration',_data)
  }
  Confirmregisteration(_data: registerconfirm) {
    return this.http.post(this.baseUrl + 'User/confirmregisteration', _data);
  }

  Proceedlogin(_data: usercred) {
    return this.http.post<loginresp>(this.baseUrl + 'Authorize/GenerateToken', _data);
  }
  Loadmenubyrole(role:string){
    return this.http.get<menu[]>(this.baseUrl + 'UserRole/GetAllMenusbyrole?userrole='+role);
  }
  Resetpassword(_data:resetpassword){
    return this.http.post(this.baseUrl + 'User/resetpassword', _data);
  }

  Forgetpassword(username:string){
    return this.http.get(this.baseUrl + 'User/forgetpassword?username=' + username);
  }

  Updatepassword(_data:updatepassword){
    return this.http.post(this.baseUrl + 'User/updatepassword',  _data);
  }
  Getmenupermission(role:string,menuname:string){
    return this.http.get<menupermission>(this.baseUrl + 'UserRole/GetMenupermissionbyrole?userrole='+role+'&menucode=' + menuname)
  }

  getToken() {
    return localStorage.getItem("token") || '';
  }
 

  GetRefreshToken() {
    return localStorage.getItem("refreshToken") || '';
  }
  GetRole() {
    return localStorage.getItem("userrole") || '';
  }
  //
  GenerateRefreshToken() {
    console.log("sss")
    let input = {
      "token": this.getToken(),
      "refreshToken": this.GetRefreshToken(),
      "userRole": localStorage.getItem("userRole") 
    }
    return this.http.post(this.baseUrl + 'Authorize/GenerateRefreshToken', input);
  }

  SaveTokens(tokendata: any) {
    console.log(tokendata)
    localStorage.setItem('token', tokendata.token);
    localStorage.setItem('refreshToken', tokendata.refreshToken);
    localStorage.setItem('userRole', tokendata.userRole);
  }
  //

  Getallusers() {
    return this.http.get<users[]>(this.baseUrl + 'User/GetAll');
  }



  GetUserbycode(code:string) {
    return this.http.get<users>(this.baseUrl + 'User/GetBycode?code='+code);
  }

  Getallroles() {
    return this.http.get<roles[]>(this.baseUrl + 'UserRole/GetAllRoles');
  }

  Updaterole(_data: updateuser) {
    return this.http.post(this.baseUrl + 'User/updaterole', _data);
  }
  Updatestatus(_data: updateuser) {
    return this.http.post(this.baseUrl + 'User/updatestatus', _data);
  }

  Getallmenus() {
    return this.http.get<menus[]>(this.baseUrl + 'UserRole/GetAllMenus');
  }

  Assignrolepermission(_data:menupermission[]){
    return this.http.post(this.baseUrl + 'UserRole/assignrolepermission', _data);
  }

  //Customer API

  Getallmenusbyuser(user:string) {
    return this.http.get<menuuserpermission[]>(this.baseUrl + 'UserRole/GetAllMenusbyUser?userrole=' + user);
  }





}
