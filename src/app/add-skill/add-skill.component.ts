import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {Area} from "../area";
import {AreaService} from "../services/area.service";
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

//decalaration d'un Output qui gére les événements (Emission d'évenements vers le parent)
  @Output() newSkillIdEvent = new EventEmitter<number>();

  selectedSkillId(value: string) {
    this.newSkillIdEvent.emit(Number(value));
  }


  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService,
              private areaService: AreaService) {
  }

  skillList: Skill[] = [];
  areaList: Area[] = [];

  addSelectSkillForm = this.formBuilder.group({
    aereaSelect: 0,
    skillSelect: 0
  })

  ngOnInit(): void {
    //   this.skillService.getAllSkill().subscribe(result => {
    //   this.skillList=result;
    // });

    this.areaService.getAllArea().subscribe(result => {
      this.areaList = result;
    });
  }

  onAreaChange() {
    if (this.addSelectSkillForm.get('aereaSelect')?.value != 0) {
      this.skillService.getSkillbyArea(this.addSelectSkillForm.get('aereaSelect')?.value).subscribe(result => {
        this.skillList = result;
      });
      this.newSkillIdEvent.emit(Number(this.addSelectSkillForm.get('skillSelect')?.value));
    }

  }

}
