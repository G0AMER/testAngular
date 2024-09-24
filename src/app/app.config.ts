import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, Routes} from "@angular/router";
import {MemberFormComponent} from "./member-form/member-form.component";
import {MemberComponent} from "./member/member.component";
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: 'create', component: MemberFormComponent,},
  {path: '', component: MemberComponent,},
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule),],

};

