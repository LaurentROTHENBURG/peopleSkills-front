import {Component, OnInit, OnChanges} from '@angular/core';
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {FormBuilder} from "@angular/forms";
import {SkillArea} from "../skillArea";
import {AreaService} from "../services/area.service";

@Component({
  selector: 'app-skills-setting',
  templateUrl: './skills-setting.component.html',
  styleUrls: ['./skills-setting.component.css']
})
export class SkillsSettingComponent implements OnInit {

  constructor(private skillService: SkillService,
              private formBuilder: FormBuilder,
              private areaService: AreaService
  ) {
  }

  skill: Skill | undefined;
  skillList: Skill[] = [];
  skillAreaList: SkillArea[] = [];

  skillForm = this.formBuilder.group({
    skillId: 0,
    name: '',
    startDate: '',
    endDate: ''
  });

  createSkillForm = this.formBuilder.group({
    skillId: 0,
    name: '',
    skillArea: '',
    startDate: '',
    endDate: ''
  });


  showSkillSettingModal: boolean = false;
  showSkillUpdateModal: boolean = false;
  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.skillService.getAllSkill().subscribe(result => {
      this.skillList = result;
      this.totalLength = result.length;
    });
    this.areaService.getAllArea().subscribe(result => {
      this.skillAreaList = result;
    });
  };

  //Affichage du nombre de skills présentes dans le tableau
  public getRowsSkill() {
    return this.skillList.length;
  }

  refreshSkill() {
    this.skillService.getAllSkill().subscribe(result => {
      this.skillList = result;
    })
  };

  onDeleteSkillById(skillId: number) {
    this.skillService.deleteSkillById(skillId).subscribe(() => {
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
  }

  onSkillUpdate() {
    this.skill = this.skillForm.value;
    this.skillService.updateSKill(this.skill).subscribe(() => {
      this.refreshSkill()
    });
    this.skillForm.reset({
      skill_name: '',
      startDate: '',
      endDate: ''
    })
    this.showSkillUpdateModal = false;

  };

  onSkillCreate() {
    this.skill = this.createSkillForm.value;
    this.skillService.createSKill(this.skill).subscribe(() => {
      this.refreshSkill()
    });
    this.createSkillForm.reset({
      skill_name: '',
      startDate: '',
      endDate: ''
    })
    this.showSkillSettingModal = false;
  };

  openModal() {
    this.showSkillSettingModal = true;
  };

  openModalUpdate() {
    this.showSkillUpdateModal = true;
  };

  closeModal() {
    this.showSkillSettingModal = false;
  };

  closeModalUpdate() {
    this.showSkillUpdateModal = false;
  };

  updateDateEndSkill(newEndDate: any, skill: Skill) {
    skill.endDate = newEndDate;
    this.skillService.updateEndDateSkill(skill).subscribe();
  };

}//end
