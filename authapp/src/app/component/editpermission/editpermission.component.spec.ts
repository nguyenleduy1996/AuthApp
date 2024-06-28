import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpermissionComponent } from './editpermission.component';

describe('EditpermissionComponent', () => {
  let component: EditpermissionComponent;
  let fixture: ComponentFixture<EditpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditpermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
