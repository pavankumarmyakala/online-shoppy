import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlswearComponent } from './girlswear.component';

describe('GirlswearComponent', () => {
  let component: GirlswearComponent;
  let fixture: ComponentFixture<GirlswearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GirlswearComponent]
    });
    fixture = TestBed.createComponent(GirlswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
