import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsListViewComponent } from './accounts-list-view.component.ts';

describe('AccountsListViewComponent', () => {
  let component: AccountsListViewComponent;
  let fixture: ComponentFixture<AccountsListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
