

import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberComponent} from "./member/member.component";
import { HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MemberComponent, HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test';
  protected readonly name = "Gargouri Amer";
}


