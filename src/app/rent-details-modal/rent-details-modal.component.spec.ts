import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDetailsModalComponent } from './rent-details-modal.component';

describe('RentDetailsModalComponent', () => {
  let component: RentDetailsModalComponent;
  let fixture: ComponentFixture<RentDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
