import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, Routes} from "@angular/router";
import {MemberFormComponent} from "./member-form/member-form.component";
import {MemberComponent} from "./member/member.component";
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: 'create', component: MemberFormComponent, pathMatch: 'full'},
  {path: '', component: MemberComponent, pathMatch: 'full'},
  {path: ':id/edit', component: MemberFormComponent, pathMatch: 'full'},
  {path: '**', component: MemberFormComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule),],

};

