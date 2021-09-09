import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {SkillArea} from "../skillArea";
import {AreaService} from "../services/area.service";
import {Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Collaborator} from "../collaborator";
import {CollaboratorService} from "../services/collaborator.service";
import {CollaboratorSkill} from "../collaboratorSkill";
import {LogicalFileSystem} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

//decalaration d'un Output qui gére les événements (Emission d'évenements vers le parent)
  @Output() newSkillIdEvent = new EventEmitter<number>();

  selectedSkillId(value: string) {
    this.newSkillIdEvent.emit(Number(value));
  }

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService,
              private areaService: AreaService,
              private route: ActivatedRoute,
              private router: Router,
              private collaboratorService: CollaboratorService) {
  }


  collaboratorSkill: CollaboratorSkill | undefined;
  skillList: Skill[] = [];
  areaList: SkillArea[] = [];
  collaboratorDetail !: Collaborator;

  addSelectSkillForm = this.formBuilder.group({
    collaboratorId: 0,
    skillArea: 0,
    skillSelect: 0
  })

  addSkillForOneCollaboratorForm = this.formBuilder.group({
    collaboratorSkillId: '',
    collaboratorIdx: '',
    skillId: '',
    autoRating: ''
  })


  ngOnInit(): void {

    this.areaService.getAllArea().subscribe(result => {
      this.areaList = result;
    });

    //je récupère le collaboratorID depuis la route
    const routeParams = this.route.snapshot.paramMap;
    const collaboratorIdfromRoute = Number(routeParams.get('collaboratorId'));

    this.collaboratorService.getCollaboratorById(collaboratorIdfromRoute).subscribe(result => {
      this.collaboratorDetail = result;
    })

  }

  onAreaChange() {
    if (this.addSelectSkillForm.get('skillArea')?.value != 0) {
      this.skillService.getSkillbyArea(this.addSelectSkillForm.get('skillArea')?.value).subscribe(result => {
        this.skillList = result;
      });
      this.newSkillIdEvent.emit(Number(this.addSelectSkillForm.get('skill')?.value));
    }
  }

  onAddSkillForOneCollaborator() {
      this.collaboratorSkill = {
      autoRating: this.addSkillForOneCollaboratorForm.get('autoRating')?.value,
      // @ts-ignore
      collaborators:{
        // @ts-ignore
        collaboratorId: this.collaboratorDetail.collaboratorId
      },
      // @ts-ignore
      skills :{
        // @ts-ignore
        skillId: this.addSkillForOneCollaboratorForm.get('skillId')?.value

      }
    }
    console.log(this.collaboratorSkill);
    this.skillService.createSKillForOneCollaborator(this.collaboratorSkill).subscribe();

  }


}//end
