import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtillService {

  constructor(private http: HttpClient, private router:Router, private userService:UserService) {
  }

  baseUrl = environment.apiUrl

  async checkPermission(user: string, code: string): Promise<boolean> {
    try {
      const items = await firstValueFrom(this.userService.Getallmenusbyuser(user));
      console.log(code)
      for (let a of items) {
        for (let x of a.listChild) {
          if (x.permission === code) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      console.error('Error checking permission:', error);
      return false;
    }
  }

}
