import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Parallax from 'parallax-js';
@Component({
  selector: 'app-header-character',
  templateUrl: './header-character.component.html',
  styleUrls: ['./header-character.component.scss'],
})
export class HeaderCharacterComponent implements AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    new Parallax(this.parallaxScene.nativeElement, {
      selector: '.parallax-layer',
    });
  }
}
