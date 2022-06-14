import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallentriesComponent } from './callentries.component';

describe('CallentriesComponent', () => {
  let component: CallentriesComponent;
  let fixture: ComponentFixture<CallentriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallentriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
