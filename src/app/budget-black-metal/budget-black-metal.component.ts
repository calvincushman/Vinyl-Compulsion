import { Component, OnInit } from '@angular/core';
import { Title } from '../title.model';
import { Router } from '@angular/router';
import { TitleService } from '../title.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-budget-black-metal',
  templateUrl: './budget-black-metal.component.html',
  styleUrls: ['./budget-black-metal.component.scss'],
  providers: [TitleService]
})

export class BudgetBlackMetalComponent implements OnInit {

  titles: FirebaseListObservable<any[]>;

  constructor(private router: Router, private titleService: TitleService) {}

  ngOnInit() {
    this.titles = this.titleService.getTitles();
  };

  goToDetailPage(clickedTitle) {
    this.router.navigate(['titles', clickedTitle.$key])
  };


}
