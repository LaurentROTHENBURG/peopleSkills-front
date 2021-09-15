import {Component, Input, OnInit, Output} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../project";
import {Location} from '@angular/common';
import {CollaboratorService} from "../services/collaborator.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private _location: Location,
              private collaboratorService: CollaboratorService) {
  }

  name : string='';

  //Ajout du ! pour dire que l'on est certains que l'objet ne sera pas undefined
  projectDetail !: Project;


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const projectIdfromRoute = Number(routeParams.get('projectId'));

    this.projectService.getProjectById(projectIdfromRoute).subscribe(projectDetailResult => {
      this.projectDetail = projectDetailResult;
    });

  };


  backClicked() {
    this._location.back();
  }


}//end
