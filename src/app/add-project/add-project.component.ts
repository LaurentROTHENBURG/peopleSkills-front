import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Project} from "../project";
import {ProjectService} from "../services/project.service";
import {Collaborator} from "../collaborator";
import {ActivatedRoute} from "@angular/router";
import {CollaboratorService} from "../services/collaborator.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private collaboratorService: CollaboratorService) {
  }

  collaboratorDetail !: Collaborator;

  addSelectProjectForm = this.formBuilder.group({
    projectId: '0',
    description: '',
    name: '',
    startDate: '',
    endDate: ''
  });

  project: Project | undefined;

  ngOnInit(): void {
    //je récupère le collaboratorID depuis la route
    const routeParams = this.route.snapshot.paramMap;
    const collaboratorIdfromRoute = Number(routeParams.get('collaboratorId'));

    this.collaboratorService.getCollaboratorById(collaboratorIdfromRoute).subscribe(result => {
      this.collaboratorDetail = result;
    })

  }

  onAddProject() {
    //Insertion dans la table projet
    this.project = this.addSelectProjectForm.value;
    this.projectService.createProject(this.project).subscribe();

    //Insertion dans la table collaborator_project

  }

}
