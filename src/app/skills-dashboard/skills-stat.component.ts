import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SkillService} from "../services/skill.service";
import {CollaboratorService} from "../services/collaborator.service";
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Color, Colors, Label} from "ng2-charts";

@Component({
  selector: 'app-skills-stat',
  templateUrl: './skills-stat.component.html',
  styleUrls: ['./skills-stat.component.css']
})
export class SkillsStatComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}], yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins: any;
  public barChartData: ChartDataSets[] = [
    {data: [], label: 'Nbre Compétences'}
  ];
  public barChartColors: Colors[] = []


  countSkills: any;
  countCollaboratorActif: any;
  countCollaboratorSkill: any;
  skill: any;

  constructor(private formBuilder: FormBuilder,
              private skillService: SkillService,
              private collaboratorService: CollaboratorService) {
  }

  ngOnInit(): void {
    this.skillService.getCountSkill().subscribe(result => {
      this.countSkills = result;

      for (let countSkill of this.countSkills) {
        this.barChartLabels.push(countSkill[0]);
                          // @ts-ignore
        this.barChartData[0].data.push(countSkill[1]);
        this.barChartColors = [
          {
            backgroundColor: 'rgba(220, 198, 224, 1)',
          },
        ];
      }
    })

    this.collaboratorService.getCountCollaboratorActif().subscribe(result => {
      this.countCollaboratorActif = result;
    })

    this.skillService.getCountCollaboratorSkill().subscribe(result => {
      this.countCollaboratorSkill = result;
    });

  }
}//end
