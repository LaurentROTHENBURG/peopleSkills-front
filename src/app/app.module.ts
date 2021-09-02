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
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import {RouteEventsService} from "./services/route-events.service";
import { SkillsStatComponent } from './skills-stat/skills-stat.component';



const appRoutes = [
  // racine de l'application
  {path: '', component: AuthComponent},

  // routes
  {path: 'collaboratorSetting', component: CollaboratorComponent},
  {path: 'authentification', component: AuthComponent},
  {path: 'skill', component: SkillsComponent},
  {path: 'skill/:collaboratorId', component: SkillsComponent},
  {path: 'addSkill', component: AddSkillComponent},
  {path: 'skill/add-skill/:collaboratorId', component: AddSkillComponent},
  {path: 'addProject', component: AddProjectComponent},
  {path: 'skill/add-project/:collaboratorId', component: AddProjectComponent},
  {path: 'skill/project-detail/:projectId', component: ProjectDetailComponent},
  {path: 'skillsSearch', component: SkillsSearchComponent},
  {path: 'skillsSetting', component: SkillsSettingComponent},
  {path: 'skillOverview', component: SkillsStatComponent},
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
    ProjectComponent,
    ProjectDetailComponent,
    CollaboratorComponent,
    SkillsStatComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,RouteEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
