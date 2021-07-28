import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  addSelectProjectForm =this.formBuilder.group({

  });

  ngOnInit(): void {
  }

}
