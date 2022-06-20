import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appShrinkFontSize]',
})
export class ShrinkFontSizeDirective implements OnInit, AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const textLength = this.el.nativeElement?.textContent?.length!;
    const resizeObserver = new ResizeObserver(() => {
      if (textLength > 11) {
        const fontSizePixels =
          this.el.nativeElement.parentElement?.clientWidth! / 12;
        this.el.nativeElement.style.fontSize =
          (fontSizePixels / 1920) * 100 + 'vw';
      }
    });

    resizeObserver.observe(this.el.nativeElement.parentElement!);
  }
}
