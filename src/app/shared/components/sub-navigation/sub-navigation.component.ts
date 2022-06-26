import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item';

@Component({
  selector: 'app-sub-navigation',
  templateUrl: './sub-navigation.component.html',
  styleUrls: ['./sub-navigation.component.scss'],
})
export class SubNavigationComponent implements OnInit {
  @Input() navigationLinks: NavigationItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
