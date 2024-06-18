import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user.service';
import { Router } from '@angular/router';
import { menu } from '../../_model/user.model';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {


  constructor(private service:UserService, private router:Router) {
   
  }
  menulist!:menu[];
  ngOnInit(): void {
    this.service._menulist.set([])
  }
}
