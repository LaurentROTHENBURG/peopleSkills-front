import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SkillsSettingComponent} from './skills-setting/skills-setting.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SkillsComponent} from './skills/skills.component';
import {SkillsSearchComponent} from './skills-search/skills-search.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AddSkillComponent} from './add-skill/add-skill.component';
import {AuthComponent} from './auth/auth.component';
import {AuthService} from "./services/auth";
import { AreaSkillComponent } from './area-skill/area-skill.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectComponent } from './project/project.component';

const appRoutes = [
  {path: 'skillsSetting', component: SkillsSettingComponent},
  {path: 'authentification', component: AuthComponent},
  {path: 'skill', component: SkillsComponent},
  {path: 'addSkill', component: AddSkillComponent},
  {path: 'addProject', component: AddProjectComponent},
  {path: 'skillsSearch', component: SkillsSearchComponent},
  {path: '', component: SkillsSettingComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    SkillsSettingComponent,
    SkillsComponent,
    SkillsSearchComponent,
    FourOhFourComponent,
    AddSkillComponent,
    AuthComponent,
    AreaSkillComponent,
    AddProjectComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
