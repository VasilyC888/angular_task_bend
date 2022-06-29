import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingRowComponent } from './thing-row.component';

describe('ThingRowComponent', () => {
  let component: ThingRowComponent;
  let fixture: ComponentFixture<ThingRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
