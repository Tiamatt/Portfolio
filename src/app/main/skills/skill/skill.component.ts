import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { SkillModel } from '../../../shared/models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit, OnChanges {
  @Input() skillIdInput: number;
  skill: SkillModel;

  constructor(private dataService: DataService) { }

  ngOnInit() {}

  ngOnChanges(){
    this.skill = this.dataService.getSkill(this.skillIdInput);
  }
}
