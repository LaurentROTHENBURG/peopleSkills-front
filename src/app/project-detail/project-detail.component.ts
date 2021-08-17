import {Component, Input, OnInit, Output} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../project";
import {Location} from '@angular/common';
import {RouteEventsService} from "../services/route-events.service";


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  name : string='';

  //Ajout du ! pour dire que l'on est certains que l'objet ne sera pas undefined
  projectDetail !: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private _location: Location,
              private routeEventsService: RouteEventsService) {
  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const projectIdfromRoute = Number(routeParams.get('projectId'));

    this.projectService.getProjectById(projectIdfromRoute).subscribe(projectDetailResult => {
      this.projectDetail = projectDetailResult;
    });

  };

  router !: Router

  cancel() {
    console.log('url de retour : ' + this.routeEventsService.previousRoutePath.value);
       this.router.navigate(['http://localhost:4200/'+ this.routeEventsService.previousRoutePath.value]);
  }


}//end
