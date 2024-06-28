import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_service/user.service';

export const authGuard: CanActivateFn = (route, state) => {

  let router = inject(Router);
  let toastr = inject(ToastrService)
  let service = inject(UserService)

  let menuname = ''
  if(route.url.length > 0){
    menuname = route.url.toString().replace(',','/')

  }
  console.log(menuname)
  if(localStorage.getItem('username')!= null){
    let username = localStorage.getItem('username') as string
    if(menuname != ''){
      service.Getallmenusbyuser(username).subscribe(item => {
        var isOK = false;
        item.forEach(a =>{
          a.listChild.forEach(x=>{
            if(x.url === "/" +menuname ){
              isOK = true
            }
          })

      })
        if(isOK){
          return true;
        }else{
          toastr.warning('Unauthoried access')
          router.navigateByUrl('/')
          return false;
        }
      })
      return true;
    }else{
      return true;
    }
  }else{
    toastr.warning('Unauthoried access')
    router.navigateByUrl('/login')
    return false;
  }
  
};
