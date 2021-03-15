import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NewsService } from 'src/app/news.service';
import {
  LoadNewsAction,
  LoadNewsFailureAction,
  LoadNewsSuccessAction,
  NewsActionTypes,
} from '../actions/news.action';

@Injectable()
export class NewsEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}
  @Effect() loadNews$ = this.actions$.pipe(
    ofType<LoadNewsAction>(NewsActionTypes.LOAD_NEWS),
    mergeMap(() =>
      this.newsService.getNews().pipe(
        map((data: any) => {
          console.log('Ngrx articles NGRX EFFECTS:', data.articles);
          return new LoadNewsSuccessAction(data.articles);
        }),
        catchError((error) => of(new LoadNewsFailureAction(error)))
      )
    )
  );
}
