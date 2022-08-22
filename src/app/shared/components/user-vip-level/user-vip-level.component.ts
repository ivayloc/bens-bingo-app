import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserInfo } from 'src/app/state';
import { UserInfo } from '../../models/user-info';

@Component({
  selector: 'app-user-vip-level',
  templateUrl: './user-vip-level.component.html',
  styleUrls: ['./user-vip-level.component.scss'],
})
export class UserVipLevelComponent implements OnInit {
  getUserInfo$ = new Observable<UserInfo>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getUserInfo$ = this.store.select(selectUserInfo);
  }
}
