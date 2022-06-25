import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatModeratorsComponent } from './chat-moderators.component';

describe('ChatModeratorsComponent', () => {
  let component: ChatModeratorsComponent;
  let fixture: ComponentFixture<ChatModeratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatModeratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatModeratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
