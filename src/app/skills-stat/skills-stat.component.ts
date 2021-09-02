import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SkillService} from "../services/skill.service";

@Component({
  selector: 'app-skills-stat',
  templateUrl: './skills-stat.component.html',
  styleUrls: ['./skills-stat.component.css']
})
export class SkillsStatComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService ) { }

  patrimoineSkills: any;

  ngOnInit(): void {
    this.skillService.getPatrimoineSkill().subscribe(result => {
      this.patrimoineSkills = result;
    })
  }
  }
