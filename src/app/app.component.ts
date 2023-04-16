import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'insta';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }
}
