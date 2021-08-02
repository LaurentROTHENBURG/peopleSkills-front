import {Component, OnInit, OnChanges} from '@angular/core';
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-skills-setting',
  templateUrl: './skills-setting.component.html',
  styleUrls: ['./skills-setting.component.css']
})
export class SkillsSettingComponent implements OnInit, OnChanges {

  constructor(private skillService: SkillService,
              private formBuilder: FormBuilder
  ) {
  }

  skillList: Skill[] = [];

  skillForm = this.formBuilder.group({
    skillId: 0,
    name: '',
    startDate: '',
    endDate: ''
  });

  createSkillForm = this.formBuilder.group({
    skillId: 0,
    name: '',
    startDate: '',
    endDate: ''
  });

  displaySkillUpdate: boolean = false;

  //refreshSkill = this.skillService.getAllSkill();

  ngOnInit(): void {
    this.skillService.getAllSkill().subscribe(result => {
      this.skillList = result;
      console.log(result);
    })
  }

  refreshSkill() {
    this.skillService.getAllSkill().subscribe(result => {
      this.skillList = result;
    })
  };

  onDeleteSkillById(skillId: number) {
    this.skillService.deleteSkillById(skillId).subscribe(() => {
      console.log("Skill " + skillId + " est supprimé");
      this.refreshSkill();
    });
  }

  onSkillEdit(skill: Skill) {
    this.skillForm.patchValue({
      skillId: skill.skillId,
      name: skill.name,
      startDate: skill.startDate,
      endDate: skill.endDate
    })
    this.displaySkillUpdate = true;
  }

  onCancel() {
    this.displaySkillUpdate = false;
  }

  skill: Skill | undefined;

  onSkillUpdate() {
    this.skill = this.skillForm.value;
    this.skillService.updateSKill(this.skill).subscribe();
    this.skillForm.reset({
      skill_name: '',
      startDate: '',
      endDate: ''
    })
  }

  onSkillCreate() {
    this.skill = this.createSkillForm.value;
    this.skillService.createSKill(this.skill).subscribe();
    this.createSkillForm.reset({
      skill_name: '',
      startDate: '',
      endDate: ''
    })
  }

  ngOnChanges() {
    console.log("Changement")
  }


}//end
