import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {CollaboratorService} from "../services/collaborator.service";
import {Collaborator} from "../collaborator";
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private collaboratorService: CollaboratorService,
              private skillService: SkillService) {
  }

  skillListbyCollaborators: Skill[] = [];

  collaboratorList: Collaborator[] = [];

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
    this.collaboratorService.getAllCollaborator().subscribe(resultAllCollaborator => {
      this.collaboratorList = resultAllCollaborator;
      console.log(resultAllCollaborator);
    });

    this.skillService.getSkillForOneCollaborator().subscribe(resultOneCollaborator => {
      this.skillListbyCollaborators = resultOneCollaborator;
      console.log(resultOneCollaborator);
    })
  }

  onSelectCollaborator(collaboratorId: number, collaboratorList: Collaborator[]) {
    //L'identifiant du collaborateur est bien collaboratorId
    console.log("ceci est l'identifiant  : " + collaboratorId);

    //je recherche l'index à partir de l'id
    let index = collaboratorList.findIndex(i => i.collaboratorId == collaboratorId);
    console.log("ceci est l'index  : " + index);

    this.selectCollaboratorForm.get('collaboratorName')?.setValue(collaboratorList[index].name);
    this.selectCollaboratorForm.get('collaboratorFirstName')?.setValue(collaboratorList[index].firstName);
    this.selectCollaboratorForm.get('collaboratorProfession')?.setValue(collaboratorList[index].profession);
    this.selectCollaboratorForm.get('collaboratorMail')?.setValue(collaboratorList[index].mail);
    this.selectCollaboratorForm.get('collaboratorMatricule')?.setValue(collaboratorList[index].matricule);
    this.selectCollaboratorForm.get('collaboratorLanguage')?.setValue(collaboratorList[index].language);
  };

}
