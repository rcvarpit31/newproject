import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureInfraComponent } from './failure-infra.component';

describe('FailureInfraComponent', () => {
  let component: FailureInfraComponent;
  let fixture: ComponentFixture<FailureInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailureInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailureInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
