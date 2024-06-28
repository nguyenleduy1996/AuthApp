import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menuuserpermission } from '../../_model/user.model';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'app-editpermission',
  standalone: true,
  imports: [],
  templateUrl: './editpermission.component.html',
  styleUrl: './editpermission.component.css'
})
export class EditpermissionComponent implements OnInit {
  username: string = '';
  Multimenulist!:menuuserpermission[];

  constructor(private route: ActivatedRoute, private service:UserService) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['Username'];
      this.LoadMenupermission(this.username);
    });
  }
  
  LoadMenupermission(user:string){
    this.service.Getallmenusbyuser(user).subscribe(item =>{
    this.Multimenulist = item
    })
  }
}
