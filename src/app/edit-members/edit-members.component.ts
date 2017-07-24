import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-members',
  templateUrl: './edit-members.component.html',
  styleUrls: ['./edit-members.component.scss']
})
export class EditMembersComponent implements OnInit {
  @Input() selectedMember;
  
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure that you want to delete this member?")){
      this.memberService.deleteMember(memberToDelete);
    }
  }

}
