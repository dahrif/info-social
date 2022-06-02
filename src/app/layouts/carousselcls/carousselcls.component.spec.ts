import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselclsComponent } from './carousselcls.component';

describe('CarousselclsComponent', () => {
  let component: CarousselclsComponent;
  let fixture: ComponentFixture<CarousselclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousselclsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousselclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
