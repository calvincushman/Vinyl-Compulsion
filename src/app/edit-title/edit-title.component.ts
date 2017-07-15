import { Component, OnInit, Input } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss']
})
export class EditTitleComponent implements OnInit {
  @Input() selectedTitle;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
  }

  beginUpdatingTitle(titleToUpdate){
    this.titleService.updateTitle(titleToUpdate);
  }

  beginDeletingTitle(titleToDelete){
    if(confirm("Are you sure that you want to delete this title?")){
      this.titleService.deleteTitle(titleToDelete);
    }
  }

}
