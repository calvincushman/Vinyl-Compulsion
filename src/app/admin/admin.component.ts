import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { Title } from '../title.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [TitleService]
})
export class AdminComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit() {
  }

  submitForm(artist: string, title: string, description: string, formats: string, averagePrice: string) {
    var newTitle: Title = new Title(artist, title, description, formats, averagePrice);
    this.titleService.addTitle(newTitle);
  }
}
