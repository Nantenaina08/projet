import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondamnationComponent } from './condamnation.component';

describe('CondamnationComponent', () => {
  let component: CondamnationComponent;
  let fixture: ComponentFixture<CondamnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondamnationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondamnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
