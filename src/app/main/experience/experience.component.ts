import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from './experience.model';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css','../../shared/styles/general.css']
})
export class ExperienceComponent implements OnInit {
  experiences: ExperienceModel[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.experiences = this.dataService.getExperiences();
  }

}
