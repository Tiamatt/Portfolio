import { Component, OnInit } from '@angular/core';
import { ModalDialogModel } from '../../shared/components/modal-dialog/modal-dialog.model';
import { DataService } from '../../shared/services/data.service';
import { SkillModel } from '../../shared/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../../shared/styles/general.css']
})
export class SkillsComponent implements OnInit {
  skills: SkillModel[] = [];
  selectedModalDialogSkill: ModalDialogModel;
  selectedSkillId: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.skills  = this.dataService.getSkills();
    this.selectedModalDialogSkill = {
      uniqueId: "testSkill",
      title:"testSkill"
    };
  }

  /* -------------------  PRIVATE METHODS ---------------------- */
  //

  /* -------------------  EVENTS ---------------------- */
  onSelectSkill(_selectedSkill: SkillModel){
    this.selectedModalDialogSkill = {
      uniqueId: "skill" + _selectedSkill.id.toString(),
      title: _selectedSkill.name
    };
    this.selectedSkillId = _selectedSkill.id;
    document.getElementById("openModalAlertForSkill").click();
  }





}
