import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, Routes} from "@angular/router";
import {MemberFormComponent} from "./member-form/member-form.component";
import {MemberComponent} from "./member/member.component";
import {HttpClientModule} from '@angular/common/http';
import {provideAnimations} from "@angular/platform-browser/animations";
import {LoginComponent} from "./login/login.component";
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {firebaseConfig} from "./environment";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ToolComponent} from "./tool/tool.component";
import {ArticleComponent} from "./article/article.component";
import {EventComponent} from "./event/event.component";

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'create', component: MemberFormComponent, pathMatch: 'full'},
  {path: 'member', component: MemberComponent, pathMatch: 'full'},
  {path: ':id/edit', component: MemberFormComponent, pathMatch: 'full'},
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolComponent
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticleComponent
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventComponent
  },
  {path: '**', component: LoginComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), provideAnimations(), {
    provide: FIREBASE_OPTIONS,
    useValue: firebaseConfig
  }],

};

