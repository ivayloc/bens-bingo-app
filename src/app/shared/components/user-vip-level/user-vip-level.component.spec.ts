import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVipLevelComponent } from './user-vip-level.component';

describe('UserVipLevelComponent', () => {
  let component: UserVipLevelComponent;
  let fixture: ComponentFixture<UserVipLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVipLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVipLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
