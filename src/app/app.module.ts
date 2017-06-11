import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AwListComponent } from './aw-list/aw-list.component';
import { AwThumbnailComponent } from './aw-list/aw-thumbnail/aw-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AwListComponent,
    AwThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
