import {Component, OnInit, OnChanges} from '@angular/core';
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {FormBuilder} from "@angular/forms";
import {LogicalFileSystem} from "@angular/compiler-cli/src/ngtsc/file_system";


@Component({
  selector: 'app-skills-setting',
  templateUrl: './skills-setting.component.html',
  styleUrls: ['./skills-setting.component.css']
})
export class SkillsSettingComponent implements OnInit, OnChanges {

  constructor(private skillService: SkillService,
              private formBuilder: FormBuilder,) {
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

  ngOnInit(): void {
    this.skillService.getAllSkill().subscribe(result => {
      this.skillList = result;
      console.log(result);

      const btnModifSkill = document.getElementById("btnModifSkill");
      console.log(btnModifSkill);
      const formModifSkill = document.getElementById("formModifSkill");
      console.log(formModifSkill);
      btnModifSkill?.addEventListener("click",()=>{
        // @ts-ignore
        if(getComputedStyle(formModifSkill).display="none"){
          // @ts-ignore
          formModifSkill.style.display="block"
        } else {
          // @ts-ignore
          formModifSkill.style.display="none";
        }
      })

    })
  }

  onDeleteSkillById(skillId: number) {
    this.skillService.deleteSkillById(skillId);
  }

  onSkillEdit(skill: Skill) {
    this.skillForm.patchValue({
      skillId: skill.skillId,
      name: skill.name,
      startDate: skill.startDate,
      endDate: skill.endDate
    });
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
    console.log(this.skill);
    this.skillService.createSKill(this.skill).subscribe();
    this.createSkillForm.reset({
      skill_name: '',
      startDate: '',
      endDate: ''
    })
  }

  displayModifSkill(){
    console.log("affiche")
    const btnModifSkill = document.getElementById("btnModifSkill");
    const formModifSkill = document.getElementById("formModifSkill")
    btnModifSkill?.addEventListener("click",()=>{
      // @ts-ignore
      if(getComputedStyle(formModifSkill).display="none"){
        // @ts-ignore
        formModifSkill.style.display="block"
      } else {
        // @ts-ignore
        formModifSkill.style.display="none";
      }
    })
  }

  ngOnChanges() {
    console.log("Changement")
  }



}//end
