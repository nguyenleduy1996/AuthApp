import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import {  registerconfirm, userregister } from '../_model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseUrl = environment.apiUrl

  _registerresp = signal<registerconfirm>({
    userid: 0,
    username: '',
    otptext: ''
  })


  Userregisteration(_data:userregister){
    return this.http.post(this.baseUrl+'User/userregisteration',_data)
  }
  Confirmregisteration(_data: registerconfirm) {
    return this.http.post(this.baseUrl + 'User/confirmregisteration', _data);
  }
}
