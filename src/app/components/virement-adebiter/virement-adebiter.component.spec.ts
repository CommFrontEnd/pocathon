import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementADebiterComponent } from './virement-adebiter.component.ts';

describe('VirementADebiterComponent', () => {
  let component: VirementADebiterComponent;
  let fixture: ComponentFixture<VirementADebiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementADebiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementADebiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
