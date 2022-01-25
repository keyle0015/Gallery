import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidisComponent } from './midis.component';

describe('MidisComponent', () => {
  let component: MidisComponent;
  let fixture: ComponentFixture<MidisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
