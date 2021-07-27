import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-area-skill',
  templateUrl: './area-skill.component.html',
  styleUrls: ['./area-skill.component.css']
})
export class AreaSkillComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
