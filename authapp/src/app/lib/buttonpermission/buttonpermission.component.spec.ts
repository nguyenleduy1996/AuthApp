import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonpermissionComponent } from './buttonpermission.component';

describe('ButtonpermissionComponent', () => {
  let component: ButtonpermissionComponent;
  let fixture: ComponentFixture<ButtonpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonpermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
