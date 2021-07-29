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

  skillListbyCollaborator: Skill[] = [];

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
    this.collaboratorService.getAllCollaborator().subscribe(result => {
      this.collaboratorList = result;
      console.log(result);
    });

    this.skillService.getSkillForOneCollaborator().subscribe(result => {
      this.skillListbyCollaborator = result;
      console.log(result);
    })
  }

  onSelectCollaborator(index: number, collaboratorList: Collaborator[]) {

    //this.selectCollaboratorForm.get('collaboratorName')?.setValue(collaboratorList[index].name);

    let searchId = collaboratorList.map(function(x) {return x.collaboratorId; }).indexOf(index);
    console.log(searchId);

    this.selectCollaboratorForm.get('collaboratorName')?.setValue(collaboratorList[searchId].name);
    this.selectCollaboratorForm.get('collaboratorFirstName')?.setValue(collaboratorList[searchId].firstName);
    this.selectCollaboratorForm.get('collaboratorProfession')?.setValue(collaboratorList[1].profession);
    this.selectCollaboratorForm.get('collaboratorMail')?.setValue(collaboratorList[1].mail);
    this.selectCollaboratorForm.get('collaboratorMatricule')?.setValue(collaboratorList[1].matricule);
    this.selectCollaboratorForm.get('collaboratorLanguage')?.setValue(collaboratorList[1].language);
  };

}
