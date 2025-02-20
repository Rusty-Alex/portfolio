import { ComponentFixture, TestBed } from '@angular/core/testing';

import { colleaguesSaysComponent } from './colleagues-says.component';

describe('colleaguesSaysComponent', () => {
  let component: colleaguesSaysComponent;
  let fixture: ComponentFixture<colleaguesSaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [colleaguesSaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(colleaguesSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
