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
export class SkillsSearchComponent implements OnInit {

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
    this.skillService.getSkillDateEndIsNull().subscribe(result => {
      this.skillList = result;
    })

  }

  onSearchSkillSelected(skillId: number) {
    this.collaboratorService.getCollaboratorsFromSkill(skillId).subscribe(
      result => {
        this.skillsSearchResult = result;
        this.clickOnSearch = true;
      },
      error => alert("Erreur")
    )
  };

  //Affichage du nombre de collaborateurs dans le tableau
  public getRowsCollaborator() {
    return this.skillsSearchResult.length;
  }

  download() {
    var options = {
      fieldSeparator: ';',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Export PeopleSkills',
      useBom: true,
      headers: ["Nom", "Pénom", "Poste", "Email", "Langue", "Auto-Evaluation", "Profession", "Date Entrée", "Date Sortie"]
    };

    new ngxCsv(this.skillsSearchResult, "peopleSkills-download", options);
  }


}//end
