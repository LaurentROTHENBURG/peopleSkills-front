import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CollaboratorService} from "../services/collaborator.service";
import {Skill} from "../skill";
import {Collaborator} from "../collaborator";
import {Profil} from "../profil";
import {Department} from "../department";

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
    departmentName:'',
    profilName:'',
    profession: '',
    startDate: '',
    departementIdx: '',
    profilIdx: ''
  })

  collaborator: Collaborator | undefined;

  collaboratorList: Collaborator[] = [];
  profilList: Profil[] = [];
  departmentList: Department[] = [];

  showCollaboratorModal: boolean = false;
  UpdateCollaboratorModal: boolean = false;

  updateCollaboratorForm = this.formBuilder.group({
    collaboratorId: 0,
    endDate: '',
    firstName: '',
    startDate: '',
    name: '',
    language: '',
    profession: '',
    mail: '',
    matricule: '',

    });

  ngOnInit(): void {
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
      console.log(result);
    })

// Affichage de la liste des profils
    this.collaboratorService.getAllProfil().subscribe(result =>{
      this.profilList = result;
    })

    // Affichage de la liste des departments
    this.collaboratorService.getAllDepartement().subscribe(result=>{
      this.departmentList = result;
    });

  };

  onCollaboratoratorEdit(collaborator: Collaborator) {
    this.updateCollaboratorForm.patchValue({
      collaboratorId: collaborator.collaboratorId,
      endDate: collaborator.endDate,
      startDate: collaborator.startDate,
      name: collaborator.name,
      firstName : collaborator.firstName,
      profession : collaborator.profession,
      matricule : collaborator.matricule,
      mail : collaborator.mail,
      language : collaborator.language
    })
  }

  refreshCollaborator() {
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
    })
  };

  onCollaboratorCreate() {
    this.collaborator = this.createCollaboratorForm.value;
    console.log(this.createCollaboratorForm.value)
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

  onCollaboratorUpdate(){
    this.collaborator = this.updateCollaboratorForm.value;
    this.collaboratorService.updateCollaborator(this.collaborator).subscribe();
    this.updateCollaboratorForm.reset({
      collaboratorId: '',
      endDate: '',
      firstName: '',
      startDate: '',
      name: ''
    })
   this.UpdateCollaboratorModal=false;
    this.refreshCollaborator();
  }


  openModal() {
    this.showCollaboratorModal = true;
  }

  openModalUpdate() {
    this.UpdateCollaboratorModal = true;
    }

  closeModal() {
    this.showCollaboratorModal = false;
  }

  closeModalUpdate() {
    this.UpdateCollaboratorModal = false;
  };



}
