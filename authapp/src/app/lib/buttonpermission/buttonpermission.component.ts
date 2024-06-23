import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-buttonpermission',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './buttonpermission.component.html',
  styleUrl: './buttonpermission.component.css'
})
export class ButtonpermissionComponent implements OnInit {

  @Input() data!: string;
  _routerLink: string | null = null; // Chỉ định kiểu là string hoặc null
  
  ngOnInit(): void {
    this._routerLink = this.data ? this.data : null;
  }
}
