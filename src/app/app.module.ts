import {Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SkillsSettingComponent} from './skills-setting/skills-setting.component';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SkillsComponent} from './skills/skills.component';
import {SkillsSearchComponent} from './skills-search/skills-search.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AddSkillComponent} from './add-skill/add-skill.component';
import {AuthComponent} from './auth/auth.component';
import {AreaSkillComponent} from './area-skill/area-skill.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {ProjectComponent} from './project/project.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {CollaboratorComponent} from './collaborator/collaborator.component';
import {SkillsStatComponent} from './skills-dashboard/skills-stat.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ChartsModule} from 'ng2-charts';
import {AuthService} from "./services/auth.service";
import {JwtInterceptor} from "./jwt.interceptor";
import {LoginComponent} from './login/login.component';
import {AuthGuard} from "./auth.guard";
import { ProfilComponent } from './profil/profil.component';


const appRoutes = [
  // racine de l'application
  {
    path: '',
    component: SkillsComponent,
    canActivate: [AuthGuard],
    data: {roles: ["ROLE_READER", "ROLE_CREATOR", "ROLE_ADMIN"]}
  },

  // routes
  {
    path: 'collaboratorSetting',
    component: CollaboratorComponent,
    canActivate: [AuthGuard],
    data: {roles: ["ROLE_ADMIN","ROLE_CREATOR" ]}
  },
  {
    path: 'skillsSetting',
    component: SkillsSettingComponent,
    canActivate: [AuthGuard],
    data: {roles: ["ROLE_ADMIN","ROLE_CREATOR"]}
    },

  {
    path: 'profilSetting',
    component: ProfilComponent,
    canActivate: [AuthGuard],
    data: {roles: ["ROLE_ADMIN","ROLE_CREATOR"]}
  },

  {
    path: 'authentification',
    component: AuthComponent
  },

  {
    path: 'skill',
    component: SkillsComponent,
    canActivate: [AuthGuard],
    data: {roles: ["ROLE_READER",  "ROLE_ADMIN"]}
  },

  {
    path: 'skill/:collaboratorId',
    component: SkillsComponent,
    canActivate: [AuthGuard],
    data: {roles: ["ROLE_READER", "ROLE_ADMIN"]}
  },

  {path: 'addSkill', component: AddSkillComponent},
  {path: 'skill/add-skill/:collaboratorId', component: AddSkillComponent},
  {path: 'addProject', component: AddProjectComponent},
  {path: 'skill/add-project/:collaboratorId', component: AddProjectComponent},
  {path: 'skill/project-detail/:projectId', component: ProjectDetailComponent},

  {
    path: 'skillOverview',
    component: SkillsStatComponent,
    canActivate: [AuthGuard],
    data: {roles: ["ROLE_READER", "ROLE_ADMIN"]}
  },

  {
    path: 'skillsSearch',
    component: SkillsSearchComponent,
    canActivate: [AuthGuard],
    data: {roles: ["ROLE_READER", "ROLE_ADMIN"]}
    },

  {path: 'login', component: LoginComponent},
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
    LoginComponent,
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    ChartsModule
  ],
  providers: [AuthService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
