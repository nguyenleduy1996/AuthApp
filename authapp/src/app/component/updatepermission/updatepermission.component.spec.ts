import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepermissionComponent } from './updatepermission.component';

describe('UpdatepermissionComponent', () => {
  let component: UpdatepermissionComponent;
  let fixture: ComponentFixture<UpdatepermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatepermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
