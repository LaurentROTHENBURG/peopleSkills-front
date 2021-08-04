import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CollaboratorService} from "../services/collaborator.service";
import {Skill} from "../skill";
import {Collaborator} from "../collaborator";

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private collaboratorService: CollaboratorService) {
  }

  createCollaboratorForm = this.formBuilder.group({
    collaboratorId: 0,
    endDate:'',
    firstName: '',
    language:'',
    mail:'',
    matricule:'',
    name: '',
    profession:'',
    startDate:'',
    departementIdx:'',
    profilIdx:''
  })

  collaborator: Collaborator | undefined;

  collaboratorList: Collaborator[] = [];

  ngOnInit(): void {
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
      console.log(result);
    })
  };

  onCollaboratorCreate() {
    this.collaborator = this.createCollaboratorForm.value;
    this.collaboratorService.createCollaborator(this.collaborator).subscribe();
    this.createCollaboratorForm.reset({
        collaboratorName: '',
        collaboratorFirstName: ''
      }
    )
  };

}