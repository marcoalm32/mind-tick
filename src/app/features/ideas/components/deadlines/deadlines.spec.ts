import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deadlines } from './deadlines';

describe('Deadlines', () => {
  let component: Deadlines;
  let fixture: ComponentFixture<Deadlines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deadlines],
    }).compileComponents();

    fixture = TestBed.createComponent(Deadlines);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
