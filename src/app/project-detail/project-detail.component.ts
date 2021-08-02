import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../project";
import {Location} from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  //Ajout du ! pur dire que l'on est certains que l'objet ne sera pas undefined
  projectDetail !: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const projectIdfromRoute = Number(routeParams.get('projectId'));

    console.log("id du projet : " + projectIdfromRoute);

    //this.projectDetail = projectDetails.find(projectDetail => projectId === projectIdfromRoute);

    this.projectService.getProjectById(projectIdfromRoute).subscribe(projectDetailResult => {
      this.projectDetail = projectDetailResult;
    });

  };

  cancel() {
    this.location.back();
  }
}
