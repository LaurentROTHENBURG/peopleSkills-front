import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {Area} from "../area";
import {AreaService} from "../services/area.service";

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService,
              private areaService: AreaService) { }

  skillList: Skill[] = [];
  areaList: Area[]=[]

  addSelectSkillForm = this.formBuilder.group({

  })

  ngOnInit(): void {
  //   this.skillService.getAllSkill().subscribe(result => {
  //   this.skillList=result;
  // });

    this.areaService.getAllArea().subscribe(result=>{
      this.areaList=result;
    });

  }

  onSkillChange(){

  }

}
