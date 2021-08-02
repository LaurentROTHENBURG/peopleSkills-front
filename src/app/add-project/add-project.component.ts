import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Project} from "../project";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private projectService: ProjectService) {
  }

  addSelectProjectForm = this.formBuilder.group({
    projectId: '0',
    description: '',
    name: '',
    startDate: '',
    endDate: ''
  });

  project: Project | undefined;

  ngOnInit(): void {
  }

  onAddProject() {
    //Insertion dans la table projet
    this.project = this.addSelectProjectForm.value;
    this.projectService.createProject(this.project).subscribe();

    //Insertion dans la table collaborator_project

  }

}
