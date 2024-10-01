import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {Member} from "../../models/Member";
import {MemberService} from "../services/member.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, HttpClientModule, RouterLink],
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  dataSource: Member[] = []
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'createdDate', 'Actions'];

  constructor(protected _memberService: MemberService) {

  }

  deleteMember(member: Member) {
    // Call the delete method from the service
    this._memberService.deleteMember(member.id).subscribe(() => {
      // Handle success, e.g., refresh the list or show a message
    }, error => {
      // Handle error, if any
      console.error('Error deleting member', error);
    });
    this.ngOnInit();
  }

  ngOnInit(): void {
    this._memberService.getAllMembers().then((housingLocationList: Member[]) => {
      this.dataSource = housingLocationList;
    });

  }
}




