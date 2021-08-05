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
    endDate: '',
    firstName: '',
    language: '',
    mail: '',
    matricule: '',
    name: '',
    profession: '',
    startDate: '',
    departementIdx: '',
    profilIdx: ''
  })

  collaborator: Collaborator | undefined;

  collaboratorList: Collaborator[] = [];

  showCollaboratorModal: boolean = false;

  ngOnInit(): void {
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
      console.log(result);
    })
  };

  refreshCollaborator(){
    this.collaboratorService.getAllCollaborator().subscribe(result =>{
      this.collaboratorList = result;
    })
  }

  onCollaboratorCreate() {
    this.collaborator = this.createCollaboratorForm.value;
    this.collaboratorService.createCollaborator(this.collaborator).subscribe();
    this.createCollaboratorForm.reset({
        collaboratorName: '',
        collaboratorFirstName: ''
           }
    )
    this.showCollaboratorModal = false;
    console.log("j'enregistre et ferme le modal");
    this.refreshCollaborator();
  };

  openModal() {
    this.showCollaboratorModal = true;
    console.log("j'affiche le modal");
  }

  closeModal() {
    this.showCollaboratorModal = false;
    console.log("je ferme le modal");
  }

}
