import { Component, OnInit } from '@angular/core';
import { ActivityModel } from '../../shared/models/activity.model';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css','../../shared/styles/general.css']
})
export class ActivitiesComponent implements OnInit {
  activities: ActivityModel[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.activities = this.dataService.getActivities();
  }

}
