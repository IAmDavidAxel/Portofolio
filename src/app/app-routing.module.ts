import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {SkillsComponent} from "./skills/skills.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'about', component: AboutComponent}
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
