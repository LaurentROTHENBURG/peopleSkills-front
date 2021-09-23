import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SkillService} from "../services/skill.service";
import {CollaboratorService} from "../services/collaborator.service";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import {LogicalFileSystem} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-skills-stat',
  templateUrl: './skills-stat.component.html',
  styleUrls: ['./skills-stat.component.css']
})
export class SkillsStatComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService,
              private collaboratorService: CollaboratorService) {
  }

  patrimoineSkills: any;
  countCollaboratorActif: any;
  countCollaboratorSkill: any;

  ngOnInit(): void {
    this.skillService.getPatrimoineSkill().subscribe(result => {
      this.patrimoineSkills = result;
      console.log("objet patrimoineskills :" + this.patrimoineSkills)
    })
    this.collaboratorService.getCountCollaboratorActif().subscribe(result => {
      this.countCollaboratorActif = result;
    })
    this.skillService.getCountCollaboratorSkill().subscribe(result => {
      this.countCollaboratorSkill = result;
    });
  }

  xChart = this.skillService.getPatrimoineSkill().subscribe(result => {
    this.patrimoineSkills = result;

  })

  //ngchart
  barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  // barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  barChartLabels: Label[] = ['1'];
  barChartType: ChartType = 'bar';
  barChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 60, 75, 65], label: 'Series A'},

  ];

}//end
