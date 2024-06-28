import { Component, DoCheck, ElementRef, OnInit, ViewChild, effect } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { UserService } from '../../_service/user.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { menu, menupermission, menuuserpermission } from '../../_model/user.model';

@Component({
  selector: 'app-appmenu',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterLink],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent implements OnInit, DoCheck {
  constructor(private service:UserService, private router:Router) {
       effect(() =>{
        this.menulist = this.service._menulist();
        this.Multimenulist = this.service._Multimenulist();
       })
  }


  menulist!:menu[];
  Multimenulist!:menuuserpermission[];
  loginuser =  '';
  showmenu = false;
  ngOnInit(): void {
    let user = localStorage.getItem('username') as string;
    this.service.Getallmenusbyuser(user).subscribe(item =>{
      let filteredPermissions = item.map(permission => ({
        code: permission.code,
        icon: permission.icon,
        listChild: permission.listChild.filter(child => child.type === "MENU")
    }));
    this.Multimenulist = filteredPermissions
    })
  }

  ngDoCheck(): void {
    this.loginuser = localStorage.getItem('username') as string;
    this.Setaccess()
  }
  Setaccess(){
    let userrole = localStorage.getItem('userrole');
    let currentUrl = this.router.url;
    if(currentUrl ==='/register' || currentUrl === '/login' ||currentUrl === '/resetpassword' || currentUrl === '/forgetpassword' ){
      this.showmenu = false
    }else{
      this.showmenu = true;
    }
  }
 
  toggleMenu(menuId: string) {
    const menuElement = document.getElementById(menuId);
    if (menuElement) {
      const displayStyle = menuElement.style.display;
      menuElement.style.display = displayStyle === 'none' ? 'block' : 'none';
    }
  }
}

