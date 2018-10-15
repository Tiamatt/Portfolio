import { TechnicalSkillModel } from './../../shared/models/technical-skill.model';
import { DataService } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css', '../../shared/styles/general.css']
})
export class TechnicalSkillsComponent implements OnInit {
  technicalSkills: TechnicalSkillModel[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.technicalSkills  = this.dataService.getTechnicalSkills();
  }


}
