import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {CollaboratorService} from "../services/collaborator.service";
import {Collaborator} from "../collaborator";
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {ProjectService} from "../services/project.service";
import {Project} from "../project";
import {ActivatedRoute} from "@angular/router";
import {RouteEventsService} from "../services/route-events.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnChanges {


  constructor(private formBuilder: FormBuilder,
              private collaboratorService: CollaboratorService,
              private skillService: SkillService,
              private route: ActivatedRoute,
              private pojectService: ProjectService,
              private routeEventService: RouteEventsService) {
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

    const routeParams = this.route.snapshot.paramMap;
    const collaboratorIdfromRoute = Number(routeParams.get('collaboratorId'));

    this.collaboratorService.getAllCollaborator().subscribe(resultAllCollaborator => {
      this.collaboratorList = resultAllCollaborator;

      this.selectCollaboratorForm.get('selectCollaborator')?.setValue(collaboratorIdfromRoute);

       this.onSelectCollaborator(collaboratorIdfromRoute);
    });

  }

  onSelectCollaborator(collaboratorIdfromRoute: number) {

    let index = this.collaboratorList.findIndex(i => i.collaboratorId == collaboratorIdfromRoute);

    this.selectCollaboratorForm.get('collaboratorName')?.setValue(this.collaboratorList[index].name);
    this.selectCollaboratorForm.get('collaboratorFirstName')?.setValue(this.collaboratorList[index].firstName);
    this.selectCollaboratorForm.get('collaboratorProfession')?.setValue(this.collaboratorList[index].profession);
    this.selectCollaboratorForm.get('collaboratorMail')?.setValue(this.collaboratorList[index].mail);
    this.selectCollaboratorForm.get('collaboratorMatricule')?.setValue(this.collaboratorList[index].matricule);
    this.selectCollaboratorForm.get('collaboratorLanguage')?.setValue(this.collaboratorList[index].language);

    this.skillService.getSkillForOneCollaborator(collaboratorIdfromRoute).subscribe(resultSkillOneCollaborator => {
      this.skillListbyCollaborator = resultSkillOneCollaborator;
    });

    this.pojectService.getProjectForOneCollaborator(collaboratorIdfromRoute).subscribe(resultProjectOneCollaborator => {
      this.projectListbyCollaborator = resultProjectOneCollaborator;
    });
  };

  ngOnChanges() {
    console.log("Changement")
  };

}//end
