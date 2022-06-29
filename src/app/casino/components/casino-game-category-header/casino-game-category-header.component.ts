import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-casino-game-category-header',
  templateUrl: './casino-game-category-header.component.html',
  styleUrls: ['./casino-game-category-header.component.scss'],
})
export class CasinoGameCategoryHeaderComponent implements AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;
  @Input() title = '';
  @Input() gameCategory = '';
  constructor() {}

  ngAfterViewInit(): void {
    new Parallax(this.parallaxScene.nativeElement, {
      selector: '.parallax-layer',
    });
  }
}
