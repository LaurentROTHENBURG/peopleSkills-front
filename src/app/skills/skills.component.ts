import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
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


  collaborator: Collaborator | undefined;

  selectCollaboratorForm = this.formBuilder.group({
    selectCollaborator: 0,
    collaboratorName: '',
    collaboratorFirstName: '',
    collaboratorProfession: '',
    collaboratorMail: '',
    collaboratorMatricule: '',
    collaboratorLanguage: '',
    collaboratorDepartment: '',
    collaboratorManager: ''
  });

  ngOnInit(): void {
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
      console.log(result);
    })
  }

  collaboratorList: Collaborator[] = [];

  onSelectCollaborator(index: number | undefined, collaboratorList: Collaborator[]) {
    // @ts-ignore
    this.selectCollaboratorForm.get('collaboratorName')?.setValue(collaboratorList[1].name);
    this.selectCollaboratorForm.get('collaboratorFirstName')?.setValue(collaboratorList[1].firstName);
    this.selectCollaboratorForm.get('collaboratorProfession')?.setValue(collaboratorList[1].profession);
    this.selectCollaboratorForm.get('collaboratorMail')?.setValue(collaboratorList[1].mail);
    this.selectCollaboratorForm.get('collaboratorMatricule')?.setValue(collaboratorList[1].matricule);
    this.selectCollaboratorForm.get('collaboratorLanguage')?.setValue(collaboratorList[1].language);
  };

}
