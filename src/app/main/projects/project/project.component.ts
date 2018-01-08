import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { ProjectModel } from '../../../shared/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit , OnChanges {
  @Input() projectIdInput: number;
  project: ProjectModel;

  constructor(private dataService: DataService) { }

  ngOnInit() {}

  ngOnChanges(){
    this.project = this.dataService.getProject(this.projectIdInput);
  }

}
