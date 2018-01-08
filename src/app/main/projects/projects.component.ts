import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { ProjectModel } from '../../shared/models/project.model';
import { ModalDialogModel } from '../../shared/components/modal-dialog/modal-dialog.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../../shared/styles/general.css']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectModel[] = [];
  selectedModalDialogProject: ModalDialogModel;
  selectedProjectId: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.projects= this.dataService.getProjects();
    this.selectedModalDialogProject = {
      uniqueId: "testProject",
      title:"testProject"
    };
  }

  /* -------------------  PRIVATE METHODS ---------------------- */
  //

  /* -------------------  EVENTS ---------------------- */
  onSelectProject(_selectedProject: ProjectModel){
    this.selectedModalDialogProject = {
      uniqueId: 'project' + _selectedProject.id.toString(),
      title: _selectedProject.name + ' project'
    };
    this.selectedProjectId = _selectedProject.id;
    document.getElementById("openModalAlertForProject").click();
  }
  
}