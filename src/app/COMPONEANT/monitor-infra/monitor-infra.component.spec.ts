import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorInfraComponent } from './monitor-infra.component';

describe('MonitorInfraComponent', () => {
  let component: MonitorInfraComponent;
  let fixture: ComponentFixture<MonitorInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorInfraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
