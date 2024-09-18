import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {Member} from "../../models/Member";

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  dataSource: Member[] = []
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'createdDate', 'Actions'];
}

