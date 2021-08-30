import {Component, OnInit, OnChanges} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SkillService} from "../services/skill.service";
import {Skill} from "../skill";
import {CollaboratorService} from "../services/collaborator.service";
import {Collaborator} from "../collaborator";
import {ngxCsv} from "ngx-csv";

@Component({
  selector: 'app-skills-search',
  templateUrl: './skills-search.component.html',
  styleUrls: ['./skills-search.component.css']
})
export class SkillsSearchComponent implements OnInit, OnChanges {

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService,
              private collaboratorService: CollaboratorService) {
  };

  skillList: Skill[] = [];
  skillsSearchResult: Collaborator[] = [];

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
    this.collaboratorService.getSkillsForCollaborators(skillId).subscribe(resultSkillSelected => {
      this.skillsSearchResult = resultSkillSelected;
    })
  };

  //Affichage du nombre de collaborateurs dans le tableau
  public getRowsCollaborator() {
    return this.skillsSearchResult.length;
  }

  ngOnChanges() {
    console.log("Changement")
  }

  download(){
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Export PeopleSkil',
      useBom: true,
      headers: ["Nom", "Pénom", "Poste", "Email", "Langue", "Auto-Evaluation"]
    };

    new ngxCsv(this.skillsSearchResult, "peopleSkill-download", options);
  }

}//end
