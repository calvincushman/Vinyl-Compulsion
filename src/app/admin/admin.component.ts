import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { MemberService } from '../member.service';
import { Title } from '../title.model';
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [TitleService, MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private titleService: TitleService, private memberService: MemberService) { }

  ngOnInit() {
  }

  submitMemberForm(name: string, location: string, records: number, tapes: number, CDs: number) {
    var newMember: Member = new Member(name, location, records, tapes, CDs);
    this.memberService.addMember(newMember);

  }

  submitForm(artist: string, title: string, description: string, formats: string, averagePrice: string) {
    var newTitle: Title = new Title(artist, title, description, formats, averagePrice);
    this.titleService.addTitle(newTitle);
  }
}
