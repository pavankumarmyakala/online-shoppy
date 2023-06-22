import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynavComponent } from './mynav.component';

describe('MynavComponent', () => {
  let component: MynavComponent;
  let fixture: ComponentFixture<MynavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MynavComponent]
    });
    fixture = TestBed.createComponent(MynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
