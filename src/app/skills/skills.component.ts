import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {CollaboratorService} from "../services/collaborator.service";
import {Collaborator} from "../collaborator";
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {ProjectService} from "../services/project.service";
import {Project} from "../project";
import {CollaboratorSkill} from "../collaboratorSkill";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private collaboratorService: CollaboratorService,
              private skillService: SkillService,
              private pojectService: ProjectService) {
  }

  skillListbyCollaborator: Skill[] = [];

  projectListbyCollaborator: Project[] = [];

  collaboratorList: Collaborator[] = [];

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
  }

  onSelectCollaborator(collaboratorId: number, collaboratorList: Collaborator[]) {

    let index = collaboratorList.findIndex(i => i.collaboratorId == collaboratorId);

    this.selectCollaboratorForm.get('collaboratorName')?.setValue(collaboratorList[index].name);
    this.selectCollaboratorForm.get('collaboratorFirstName')?.setValue(collaboratorList[index].firstName);
    this.selectCollaboratorForm.get('collaboratorProfession')?.setValue(collaboratorList[index].profession);
    this.selectCollaboratorForm.get('collaboratorMail')?.setValue(collaboratorList[index].mail);
    this.selectCollaboratorForm.get('collaboratorMatricule')?.setValue(collaboratorList[index].matricule);
    this.selectCollaboratorForm.get('collaboratorLanguage')?.setValue(collaboratorList[index].language);

    this.skillService.getSkillForOneCollaborator(collaboratorId).subscribe(resultSkillOneCollaborator => {
      this.skillListbyCollaborator = resultSkillOneCollaborator;
      console.log(resultSkillOneCollaborator);
    });

    this.pojectService.getProjectForOneCollaborator(collaboratorId).subscribe(resultProjectOneCollaborator => {
      this.projectListbyCollaborator = resultProjectOneCollaborator;
      console.log(resultProjectOneCollaborator);
    });
  };



}//end
