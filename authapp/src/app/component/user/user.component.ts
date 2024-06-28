import { Component, OnInit, ViewChild } from '@angular/core';
import { menuuserpermission, users } from '../../_model/user.model';
import { UserService } from '../../_service/user.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../material.module';
import { UserupdateComponent } from '../userupdate/userupdate.component';
import { UpdatepasswordComponent } from '../updatepassword/updatepassword.component';
import { UpdatepermissionComponent } from '../updatepermission/updatepermission.component';
import { Router, RouterLink } from '@angular/router';
import { UtillService } from '../../_service/utill.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userlist!: users[];
  displayedColumns: string[] = ["username", "name", "email", "phone", "status", "role", "action"];
  datasource: any;

  Multimenulist!: menuuserpermission[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: UserService, private toastr: ToastrService, private dialog: MatDialog, private utillServive:UtillService, private router: Router) {


  }
  ngOnInit(): void {
    this.Loadusers()

  }
  Loadusers() {
    this.service.Getallusers().subscribe(item => {
      this.userlist = item;
      this.datasource = new MatTableDataSource<users>(this.userlist);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    })
  }
  LoadPermission() {
    let user = localStorage.getItem('username') as string;
    this.service.Getallmenusbyuser(user).subscribe(item => {
      let filteredPermissions = item.map(permission => ({
        code: permission.code,
        icon: permission.icon,
        listChild: permission.listChild.filter(child => child.type === "ChildMenu")
      }));
      this.Multimenulist = filteredPermissions
    })
  }
  updaterole(code: string) {
    this.Openpopup(code, 'role');
  }
  updatePermission(user: string) {
    this.OpenpopupUpdatepermission(user)
  }

  updatestatus(code: string) {
    this.Openpopup(code, 'status');
  }

  OpenpopupUpdatepermission(username: string) {
    this.dialog.open(UpdatepermissionComponent, {
      width: '30%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: {
        username: username
      }
    }).afterClosed().subscribe(item => {
      this.Loadusers();
    })
  }

  Openpopup(username: string, type: string) {
    this.dialog.open(UserupdateComponent, {
      width: '30%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: {
        username: username,
        type: type
      }
    }).afterClosed().subscribe(item => {
      this.Loadusers();
    })
  }

  async functionedit(user: string, code: string) {
    let u = localStorage.getItem('username') as string;
    var a = await this.utillServive.checkPermission(u, code)
    if(a== true){
      this.router.navigate(['/user/editpermission'],  { queryParams: { Username  : user
      } });
    }else{
      this.toastr.warning('User not having edit access', 'warning')
    }
  }


}
