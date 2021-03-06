import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CollaboratorService} from "../services/collaborator.service";
import {Collaborator} from "../collaborator";
import {Profil} from "../profil";
import {Department} from "../department";
import {Langue} from "../langue";
import {ProfilService} from "../services/profil.service";
import {LangueService} from "../services/langue.service";
import {DepartmentService} from "../services/department.service";

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private collaboratorService: CollaboratorService,
              private profilService: ProfilService,
              private langueService: LangueService,
              private departmentService: DepartmentService) {
  }

  createCollaboratorForm = this.formBuilder.group({
    collaboratorId: 0,
    endDate: '',
    firstName: ['', Validators.required],
    name: ['', Validators.required],
    department: ['', Validators.required],
    profil: ['', Validators.required],
    startDate: ['', Validators.required],
    mail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

    profession: ['', Validators.required],
    matricule: ['', Validators.required],
    langue: ['', Validators.required],
  })

  collaborator: Collaborator | undefined;

  collaboratorList: Collaborator[] = [];
  profilList: Profil[] = [];
  departmentList: Department[] = [];
  langueList: Langue[] = [];
  countCollaboratorActif: any;

  showCollaboratorModal: boolean = false;
  UpdateCollaboratorModal: boolean = false;

  updateCollaboratorForm = this.formBuilder.group({
    collaboratorId: 0,
    endDate: '',
    firstName: ['', Validators.required],
    startDate: ['', Validators.required],
    name: ['', Validators.required],
    profession: ['', Validators.required],
    mail: ['', Validators.email],
    matricule: ['', Validators.required],
    // language: '',
    // langueIdx:1
  });

  totalLength: any;
  page: number = 1;


  ngOnInit(): void {
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
      this.totalLength = result.length;
      this.collaboratorService.getCountCollaboratorActif().subscribe(result => {
        this.countCollaboratorActif = result;
      })
    })

// Affichage de la liste des profils utilisateurs
    this.profilService.getAllProfil().subscribe(result => {
      this.profilList = result;
    })

    // Affichage de la liste des departements
    this.departmentService.getAllDepartement().subscribe(result => {
      this.departmentList = result;
    });

    // Affichage de la liste des langues
    this.langueService.getAllLangue().subscribe(result => {
      this.langueList = result;
    })

  };

  //Affichage du nombre de collaborator pr??sents dans le tableau
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
      // language: collaborator.langue.codification,
    })
    console.log("code langue : " + collaborator.langue.codification)
  }

  refreshCollaborator() {
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
    })
  };

// getter pour contr??ler la validit?? du champ mail
  get mail() {
    return this.createCollaboratorForm.get('mail')
  }

  onCollaboratorCreate() {
    if (this.createCollaboratorForm.valid) {
      this.collaborator = this.createCollaboratorForm.value;
      this.collaboratorService.createCollaborator(this.collaborator).subscribe(() => {
        this.refreshCollaborator();
      });
      this.createCollaboratorForm.reset({
          endDate: '',
          firstName: '',
          name: '',
          department: '',
          profil: '',
          startDate: '',
          mail: '',
          profession: '',
          matricule: '',
          langue: ''
        }
      )
      this.showCollaboratorModal = false;
    } else {
      alert("Erreur de saisie - v??rifiez l'adresse mail")
    }
  };

  onCollaboratorUpdate() {
    if (this.updateCollaboratorForm.valid) {
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
    } else {
      alert("Erreur de saisie - v??rifiez l'adresse mail")
    }

  };


  openModal() {
    this.showCollaboratorModal = true;
  };

  openModalUpdate() {
    this.UpdateCollaboratorModal = true;
  };

  closeModal() {
    this.showCollaboratorModal = false;
    this.createCollaboratorForm.reset({
      endDate: '',
      firstName: '',
      name: '',
      department: '',
      profil: '',
      startDate: '',
      mail: '',
      profession: '',
      matricule: '',
      langue: ''
    })
  };

  closeModalUpdate() {
    this.UpdateCollaboratorModal = false;
  };

  updateDateEndCollaborator(newEndDate: any, collaborator: Collaborator) {
    collaborator.endDate = newEndDate;
    this.collaboratorService.updateEndDateCollaborator(collaborator).subscribe();
  };


}
