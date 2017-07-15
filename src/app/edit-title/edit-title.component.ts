import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../title.model'
@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {
  @Input() selectedTitle;

  constructor() { }

  ngOnInit() {
  }

}
