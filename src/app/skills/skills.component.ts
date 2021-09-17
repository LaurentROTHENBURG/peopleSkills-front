import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {CollaboratorService} from "../services/collaborator.service";
import {Collaborator} from "../collaborator";
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {ProjectService} from "../services/project.service";
import {Project} from "../project";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private collaboratorService: CollaboratorService,
              private skillService: SkillService,
              private route: ActivatedRoute,
              private pojectService: ProjectService
  ) {
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

  });


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const collaboratorIdfromRoute = Number(routeParams.get('collaboratorId'));

    this.collaboratorService.getCollaboratorDateEndIsNull().subscribe(result => {
      this.collaboratorList = result;
      this.selectCollaboratorForm.get('selectCollaborator')?.setValue(collaboratorIdfromRoute);
      this.onSelectCollaborator(collaboratorIdfromRoute);
    });
    }

  onSelectCollaborator(collaboratorIdfromRoute: number) {
    console.log('collaborator liste : ' + this.collaboratorList);
    let index = this.collaboratorList.findIndex(i => i.collaboratorId == collaboratorIdfromRoute);
    if (this.collaboratorList.findIndex(i => i.collaboratorId == collaboratorIdfromRoute) != -1) {
      this.selectCollaboratorForm.get('collaboratorName')?.setValue(this.collaboratorList[index].name);
      this.selectCollaboratorForm.get('collaboratorFirstName')?.setValue(this.collaboratorList[index].firstName);
      this.selectCollaboratorForm.get('collaboratorProfession')?.setValue(this.collaboratorList[index].profession);
      this.selectCollaboratorForm.get('collaboratorMail')?.setValue(this.collaboratorList[index].mail);
      this.selectCollaboratorForm.get('collaboratorMatricule')?.setValue(this.collaboratorList[index].matricule);
      this.selectCollaboratorForm.get('collaboratorLanguage')?.setValue(this.collaboratorList[index].language);
      this.selectCollaboratorForm.get('collaboratorDepartment')?.setValue(this.collaboratorList[index]["department"].name);

      this.skillService.getSkillForOneCollaborator(collaboratorIdfromRoute).subscribe(result => {
        this.skillListbyCollaborator = result;
      })
    }
    this.pojectService.getProjectForOneCollaborator(collaboratorIdfromRoute).subscribe(resultProjectOneCollaborator => {
      this.projectListbyCollaborator = resultProjectOneCollaborator;
    });
  };

}//end
