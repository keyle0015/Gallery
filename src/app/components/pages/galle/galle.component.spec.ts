import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleComponent } from './galle.component';

describe('GalleComponent', () => {
  let component: GalleComponent;
  let fixture: ComponentFixture<GalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
