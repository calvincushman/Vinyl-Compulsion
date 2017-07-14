import { Injectable } from '@angular/core';
import { Title } from './title.model';
import { TITLES } from './mock-titles'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TitleService {

  titles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.titles = database.list('titles');
  }

  getTitles() {
    return this.titles;
  }

  getTitleById(titleId: number){
    for (var i = 0; i <= TITLES.length - 1; i++) {
      if (TITLES[i].id === titleId) {
        return TITLES[i];
      }
    }
  }
}
