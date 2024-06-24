import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { UserService } from './user.service';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const userSrv  = inject(UserService);
  const router  = inject(Router);
  const toastr  = inject(ToastrService);
  let _token=localStorage.getItem('token');
  let jwttoken=req.clone({
    setHeaders:{
      Authorization:'bearer '+_token
    }
  });
  return next(jwttoken).pipe(
    catchError((error: HttpErrorResponse)=>{
      //debugger;
      if(error.status === 401) {
        const isRefrsh =  confirm("Your Session is Expred. Do you want to Continue");
        if(isRefrsh) {
          userSrv.$refreshToken.next(true);
        }
      } 
      if(error.status === 500) {
        toastr.error('Đã Xảy Ra Lỗi Vui Lòng Đăng Nhập Lại');
        router.navigate(['/login']);
      } 
      return throwError(error)
    })
  );
};