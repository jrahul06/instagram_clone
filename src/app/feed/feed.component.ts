import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiServiceService } from '../core/api-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  @ViewChild('listEnd') listEnd: ElementRef | any;

  masterData: any[] = [];
  posts: any[] = [];
  load: number = 5;
  currentIndex: number = 0;
  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  loadData(): void {
    this.apiService
      .getData(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=b8763c70d66c4240a805e2590215256e`
      )
      .subscribe((responseData: any) => {
        if (responseData.status === 'ok') {
          this.masterData = responseData.articles;
          this.loadMoreItems();
        }
      });
  }

  setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.loadMoreItems();
      }
    }, options);

    observer.observe(this.listEnd?.nativeElement);
  }

  loadMoreItems() {
    const remainingItems = this.masterData.length - this.currentIndex;
    const itemsToLoad = Math.min(this.load, remainingItems);
    const items = this.masterData.slice(
      this.currentIndex,
      this.currentIndex + itemsToLoad
    );
    this.posts.push(...items);
    this.currentIndex += itemsToLoad;
  }
}
