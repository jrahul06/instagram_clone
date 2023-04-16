import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() data: any;
  expandText = true;

  ngOnInit() {
    console.log(this.data);
  }
}
