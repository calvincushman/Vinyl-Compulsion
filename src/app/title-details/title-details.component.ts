import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from  '../title.model';
import { TitleService } from '../title.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-title-details',
  templateUrl: './title-details.component.html',
  styleUrls: ['./title-details.component.scss'],
  providers: [TitleService]
})

export class TitleDetailsComponent implements OnInit {

  titleId: string;
  titleToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.titleId = urlParameters['id'];
    });
    this.titleToDisplay = this.titleService.getTitleById(this.titleId);
  }

}
