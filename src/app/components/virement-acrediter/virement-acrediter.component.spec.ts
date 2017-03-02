import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementACrediterComponent } from './virement-acrediter.component.ts';

describe('VirementACrediterComponent', () => {
  let component: VirementACrediterComponent;
  let fixture: ComponentFixture<VirementACrediterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementACrediterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementACrediterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
