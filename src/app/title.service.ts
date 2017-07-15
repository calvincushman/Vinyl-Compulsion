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

  updateTitle(localUpdatedTitle){
    var titleEntryInFirebase = this.getTitleById(localUpdatedTitle.$key);
    titleEntryInFirebase.update({artist: localUpdatedTitle.artist,
                                  title: localUpdatedTitle.title,
                                  description: localUpdatedTitle.description,
                                  formats: localUpdatedTitle.formats,
                                  averagePrice: localUpdatedTitle.averagePrice});
  }

  deleteTitle(localTitleToDelete){
    var titleEntryInFirebase = this.getTitleById(localTitleToDelete.$key);
    titleEntryInFirebase.remove();
  }
}
