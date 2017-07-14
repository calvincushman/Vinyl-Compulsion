import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from  '../title.model';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-title-details',
  templateUrl: './title-details.component.html',
  styleUrls: ['./title-details.component.scss'],
  providers: [TitleService]
})

export class TitleDetailsComponent implements OnInit {

  titleId: number;
  titleToDisplay: Title;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.titleId =parseInt(urlParameters['id']);
    });
    this.titleToDisplay = this.titleService.getTitleById(this.titleId);
  }

}
