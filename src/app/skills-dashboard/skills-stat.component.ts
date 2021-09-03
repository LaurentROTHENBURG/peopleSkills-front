import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SkillService} from "../services/skill.service";
import {CollaboratorService} from "../services/collaborator.service";


@Component({
  selector: 'app-skills-stat',
  templateUrl: './skills-stat.component.html',
  styleUrls: ['./skills-stat.component.css']
})
export class SkillsStatComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService,
              private collaboratorService: CollaboratorService) {
  }

  patrimoineSkills: any;
  countCollaboratorActif: any;
  countCollaboratorSkill: any;

  ngOnInit(): void {
    this.skillService.getPatrimoineSkill().subscribe(result => {
      this.patrimoineSkills = result;
    })
    this.collaboratorService.getCountCollaboratorActif().subscribe(result => {
      this.countCollaboratorActif = result;
    })
    this.skillService.getCountCollaboratorSkill().subscribe(result => {
      this.countCollaboratorSkill = result;
    })

    ;
  }

}//end
