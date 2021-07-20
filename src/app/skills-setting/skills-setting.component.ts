import {Component, OnInit} from '@angular/core';
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-skills-setting',
  templateUrl: './skills-setting.component.html',
  styleUrls: ['./skills-setting.component.css']
})
export class SkillsSettingComponent implements OnInit {


  skill: Skill | undefined;
  skillList: Skill[] = [];

  addSkillForm = this.formBuilder.group({formNameSkill: ''});

  constructor(private skillService: SkillService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.skillService.getAllSkill().subscribe(result => {
      this.skillList = result;
      console.log(result);
    })
  }

  onDeleteSkillById(skillId: number) {
    this.skillService.deleteSkillById(skillId);
  }

  onSaveSkill() {
    console.log("j'appui sur le bouton avant le  if");
    console.log(this.addSkillForm.get('formNameSkill')?.value);
    if (this.skill) {
      this.skill.name = this.addSkillForm.get('formNameSkill')?.value;
      this.skillService.createSKill(this.skill);

      console.log(this.skill);
    }
  }
}
