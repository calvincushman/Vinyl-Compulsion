import { Component, OnInit } from '@angular/core';
import { Title } from '../title.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-black-metal',
  templateUrl: './budget-black-metal.component.html',
  styleUrls: ['./budget-black-metal.component.scss']
})
export class BudgetBlackMetalComponent implements OnInit {

  constructor(private router: Router) {}

  titles: Title[] = [
    new Title("Krohm", "Crown of the Ancients", "Second album from one man USBM act, very atmospheric and at times depressive. Sound is more similar to traditional European black metal than traditional USBM.", "vinyl & CD", "$10-$15", 1),
    new Title("Krohm", "A World Through Dead Eyes", "Third album from One man USBM act, much more depressive than other Krohm releases, still atmospheric at times but more aligned with DSBM than traditional European black metal.", "vinyl & CD", "$10-$15", 2)
  ];

  goToDetailPage(clickedTitle: Title) {
    this.router.navigate(['titles', clickedTitle.id])
  }

  ngOnInit() {
  }

}
