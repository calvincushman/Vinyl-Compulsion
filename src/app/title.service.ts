import { Injectable } from '@angular/core';
import { Title } from './title.model';
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

  addTitle(newTitle: Title) {
    this.titles.push(newTitle)
  }

  getTitleById(titleId: string){
    return this.database.object('titles/' + titleId);
  }
}
