import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Skill} from "../skill";
import {SkillService} from "../services/skill.service";
import {Area} from "../area";
import {AreaService} from "../services/area.service";
import {Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Collaborator} from "../collaborator";
import {CollaboratorService} from "../services/collaborator.service";

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
              private areaService: AreaService,
              private route: ActivatedRoute,
              private router: Router,
              private collaboratorService: CollaboratorService) {
  }


  skillList: Skill[] = [];
  areaList: Area[] = [];
  collaboratorDetail !: Collaborator;

  addSelectSkillForm = this.formBuilder.group({
    aereaSelect: 0,
    skillSelect: 0
  })

  addSkillForOneCollaboratorForm = this.formBuilder.group({
    collaboratorSkillId: 0,
    autoRating: '',
    collaboratorIdx: '',
    favouriteSkill: '',
    obtentionDate: '',
    skillId: '',
  })


  ngOnInit(): void {

    this.areaService.getAllArea().subscribe(result => {
      this.areaList = result;
    });

    //je récupère le collaboratorID depuis la route
    const routeParams = this.route.snapshot.paramMap;
    const collaboratorIdfromRoute = Number(routeParams.get('collaboratorId'));

    this.collaboratorService.getCollaboratorById(collaboratorIdfromRoute).subscribe(result => {
      this.collaboratorDetail = result;
    })

  }

  onAreaChange() {
    if (this.addSelectSkillForm.get('aereaSelect')?.value != 0) {
      this.skillService.getSkillbyArea(this.addSelectSkillForm.get('aereaSelect')?.value).subscribe(result => {
        this.skillList = result;
      });
      this.newSkillIdEvent.emit(Number(this.addSelectSkillForm.get('skillSelect')?.value));
    }
  }



  onAddSkillForOneCollaborator() {
    // const formValue = this.addSkillForOneCollaboratorForm.value;
    // console.log("valeur de autoRating " + formValue['autoRating']);

    //autorating
    console.log('valeur autorating :  ' + this.addSkillForOneCollaboratorForm.value.autoRating);

    //Id du collaborateur collaborator_idx
    const routeParams = this.route.snapshot.paramMap;
    const collaboratorIdfromRoute = Number(routeParams.get('collaboratorId'));
    console.log('id du collaborateur : ' + collaboratorIdfromRoute)

    //id du skill skill_idx
    console.log('id du skill : ' + this.addSkillForOneCollaboratorForm.get('skillSelect')?.value.skillList);



    this.router.navigate(['/skill']);

  }


}//end
