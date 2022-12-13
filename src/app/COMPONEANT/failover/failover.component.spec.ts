import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailoverComponent } from './failover.component';

describe('FailoverComponent', () => {
  let component: FailoverComponent;
  let fixture: ComponentFixture<FailoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
