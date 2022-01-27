import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMidiComponent } from './add-midi.component';

describe('AddMidiComponent', () => {
  let component: AddMidiComponent;
  let fixture: ComponentFixture<AddMidiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMidiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
