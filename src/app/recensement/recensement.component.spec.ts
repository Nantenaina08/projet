import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensementComponent } from './recensement.component';

describe('RecensementComponent', () => {
  let component: RecensementComponent;
  let fixture: ComponentFixture<RecensementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecensementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecensementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
