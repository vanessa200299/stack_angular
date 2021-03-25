import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserListComponent } from './app-user-list.component';

describe('AppUserListComponent', () => {
  let component: AppUserListComponent;
  let fixture: ComponentFixture<AppUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
