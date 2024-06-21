import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../_service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [FormsModule, MaterialModule,RouterLink],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {

  username = ""
  
  _response: any;
  
  constructor(private builder: FormBuilder, private service:UserService, private toastr:ToastrService, private router:Router) {
  }
  ngOnInit(): void {
    
  }
  Proceed() {
    this.service.Forgetpassword(this.username).subscribe(item => {
      this._response = item;
      if (this._response.result == 'pass') {
           this.toastr.success('OTP sent to the registerd email','Forget Password');
           this.service._username.set(this.username);
           this.router.navigateByUrl('/updatepassword');
      }else{
        this.toastr.error('Failed Due to:' + this._response.message,'Registeration Failed');
      }
    })
   }
}
