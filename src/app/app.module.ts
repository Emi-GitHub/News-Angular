import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { EverythingComponent } from './everything/everything.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsEffects } from './store/effects/news.effects';
import { NewsReducer } from './store/reducers/news.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    LandingPageComponent,
    HomeComponent,
    ArticleComponent,
    EverythingComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([NewsEffects]),
    StoreModule.forRoot({ newsNgrx: NewsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
