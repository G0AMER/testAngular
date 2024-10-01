import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberComponent} from "./member/member.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MemberComponent, HttpClientModule, RouterOutlet, MatSidenavModule, MatToolbarModule, MatListModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test';
  protected readonly name = "Gargouri Amer";
}


