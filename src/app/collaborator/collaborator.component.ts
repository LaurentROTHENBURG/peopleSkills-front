import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CollaboratorService} from "../services/collaborator.service";
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
    name: '',
    department: '',
    profil: '',
    startDate: '',
    mail: '',
    profession: '',
    matricule: '',
    language: '',
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
    this.collaboratorService.getAllProfil().subscribe(result => {
      this.profilList = result;
    })

    // Affichage de la liste des departments
    this.collaboratorService.getAllDepartement().subscribe(result => {
      this.departmentList = result;
    });

  };

  //Affichage du nombre de collaborator présents dans le tableau
  public getRowsCollaborator() {
    return this.collaboratorList.length;
  }


  onCollaboratoratorEdit(collaborator: Collaborator) {
    this.updateCollaboratorForm.patchValue({
      collaboratorId: collaborator.collaboratorId,
      endDate: collaborator.endDate,
      startDate: collaborator.startDate,
      name: collaborator.name,
      firstName: collaborator.firstName,
      profession: collaborator.profession,
      matricule: collaborator.matricule,
      mail: collaborator.mail,
      language: collaborator.language
    })
  }

  refreshCollaborator() {
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
    })
  };

  onCollaboratorCreate() {

    this.collaborator = this.createCollaboratorForm.value;
    this.collaboratorService.createCollaborator(this.collaborator).subscribe(() => {
      this.refreshCollaborator()
    });
    this.createCollaboratorForm.reset({
        collaboratorName: '',
        collaboratorFirstName: ''
      }
    )
    this.showCollaboratorModal = false;
  };

  onCollaboratorUpdate() {
    this.collaborator = this.updateCollaboratorForm.value;
    this.collaboratorService.updateCollaborator(this.collaborator).subscribe(() => {
      this.refreshCollaborator()
    });
    this.updateCollaboratorForm.reset({
      collaboratorId: '',
      endDate: '',
      firstName: '',
      startDate: '',
      name: ''
    })
    this.UpdateCollaboratorModal = false;
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
