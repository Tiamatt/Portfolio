import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../../../shared/models/IProject.model';
import { IProjectDetail } from '../../../shared/models/IProjectDetail.model';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {
  @Input() project: IProject;
  projectDetail: IProjectDetail;
    
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.projectDetail = this.dataService.getProjectDetail(this.project.id);
  }
}
