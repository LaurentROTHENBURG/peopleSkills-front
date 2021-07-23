import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CollaboratorService} from "../services/collaborator.service";
import {Collaborator} from "../collaborator";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private collaboratorService: CollaboratorService) {
  }

  collaboratorList: Collaborator[] = [];
  collaborator: Collaborator | undefined;

  formSelectCollaborator = this.formBuilder.group({
    selectCollaborator: 0
  });

  formCollaboratorDetails = this.formBuilder.group({
    collaboratorId: 0,
    endDate: '',
    firstName: '',
    language: '',
    mail: '',
    matricule: '',
    name: '',
    profession: '',
    startDate: '',
    departmentIdx: ''
  });


  ngOnInit(): void {
    this.collaboratorService.getAllCollaborator().subscribe(result =>{
      this.collaboratorList = result;
    })
  }

  onSelectCollaborator() {
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
    })

  };

}
