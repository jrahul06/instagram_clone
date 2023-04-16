import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { FooterComponent } from './feed/footer/footer.component';
import { HeaderComponent } from './feed/header/header.component';
import { PostComponent } from './feed/post/post.component';
import { TruncatePipe } from './core/pipe/truncate.pipe';
import { TruncSymbolPipe } from './core/pipe/trunc-symbol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FooterComponent,
    HeaderComponent,
    PostComponent,
    TruncatePipe,
    TruncSymbolPipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
