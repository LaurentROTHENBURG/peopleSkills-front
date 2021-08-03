import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SkillService} from "../services/skill.service";
import {Skill} from "../skill";

@Component({
  selector: 'app-skills-search',
  templateUrl: './skills-search.component.html',
  styleUrls: ['./skills-search.component.css']
})
export class SkillsSearchComponent implements OnInit, OnChanges {

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService) {
  };

  skillList: Skill[] = [];
  skillsSearchResult: Skill[] = [];

  searchSkillForm = this.formBuilder.group({
    skillSelected: ''
  });

  clickOnSearch: boolean = false;

  ngOnInit(): void {
    this.skillService.getAllSkill().subscribe(result => {
      this.skillList = result;
    })
  }

  onSearchSkillSelected(skillId: number) {
    this.clickOnSearch = true;
    this.skillService.getSkillsForCollaborators(skillId).subscribe(resultSkillSelected => {
      this.skillsSearchResult = resultSkillSelected;
    })
  };

  ngOnChanges() {
    console.log("Changement")
  }

}//end
