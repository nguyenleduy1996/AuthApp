import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { Router, RouterLink } from '@angular/router';
import { registerconfirm, userregister } from '../../_model/user.model';
import { UserService } from '../../_service/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-confirmotp',
  standalone: true,
  imports: [FormsModule, MaterialModule,RouterLink],

  templateUrl: './confirmotp.component.html',
  styleUrl: './confirmotp.component.css'
})
export class ConfirmotpComponent implements OnInit {

  otptext = ""
  regresponse!: registerconfirm;
  _response: any;
  
  constructor(private builder: FormBuilder, private service:UserService, private toastr:ToastrService, private router:Router) {
  }
  ngOnInit(): void {
    this.regresponse = this.service._registerresp()
  }
  confirmOTP() {
    this.regresponse.otptext = this.otptext;
    this.service.Confirmregisteration(this.regresponse).subscribe(item => {
      this._response = item;
      if (this._response.result == 'pass') {
           this.toastr.success('Registeration completed successfully.','Success');
           this.service._registerresp.set({
             userid: 0,
             username: '',
             otptext: ''
           })
           this.router.navigateByUrl('/login');
      }else{
        this.toastr.error('Failed Due to:' + this._response.message,'Registeration Failed');
      }
    })
   }
}
