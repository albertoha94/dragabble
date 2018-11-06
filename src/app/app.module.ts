import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmojiComponent } from './emoji/emoji.component';
import { SortableDirective } from './sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmojiComponent,
    SortableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
