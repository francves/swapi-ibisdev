import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotsDetailComponent } from './pilots-detail.component';

describe('PilotsDetailComponent', () => {
  let component: PilotsDetailComponent;
  let fixture: ComponentFixture<PilotsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
