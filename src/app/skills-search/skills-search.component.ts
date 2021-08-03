import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SkillService} from "../services/skill.service";
import {Skill} from "../skill";

@Component({
  selector: 'app-skills-search',
  templateUrl: './skills-search.component.html',
  styleUrls: ['./skills-search.component.css']
})
export class SkillsSearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService) {
  }

  skillList: Skill[] = [];

  searchSkill=this.formBuilder.group({
    skillSelected: ''
  });

  ngOnInit(): void {
    this.skillService.getAllSkill().subscribe(result => {
      this.skillList = result;
    })
  }

//   onSkillSelected(skillId: number) {
// this.skillService.getSkillsForCollaborators(skillId).subscribe(resultSkillSelected=>{
//   this.skillList = resultSkillSelected;
// })
//   };


  onSkillSelected(){
    console.log("Le skillId est : ");
  }

}//end
