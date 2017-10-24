import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { IProject } from '../../shared/models/IProject.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../../shared/styles/general.css']
})
export class ProjectsComponent implements OnInit {
  projectList: IProject[] = [];
  constructor(
    private router: Router, 
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.projectList = this.dataService.getProjectList();
  }
  onSelect(_id: number){
      document.getElementById("openModalButton" + _id).click();
  }
  
}
