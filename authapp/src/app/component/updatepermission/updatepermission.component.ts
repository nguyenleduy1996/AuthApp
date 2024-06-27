import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../_service/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { menuuserpermission } from '../../_model/user.model';

@Component({
  selector: 'app-updatepermission',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './updatepermission.component.html',
  styleUrl: './updatepermission.component.css'
})
export class UpdatepermissionComponent implements OnInit {
  constructor(private builder: FormBuilder, private toastr: ToastrService, @Inject(MAT_DIALOG_DATA) public data: any,
  private service: UserService, private ref: MatDialogRef<UpdatepermissionComponent>) {

}
  dialogdata: any;
  Multimenulist!:menuuserpermission[];
  ngOnInit(): void {
    this.dialogdata = this.data;
    this.service.Getallmenusbyuser(this.dialogdata.username).subscribe(item =>{
      this.Multimenulist = item
    });
  }

  

  closepopup() {
    this.ref.close();
  }
}
