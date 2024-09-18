import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberComponent} from "./member/member.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MemberComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  protected readonly name = "Gargouri Amer";
}
