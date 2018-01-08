import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navArr : string[] = [];
  activeSection : string;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.navArr = this.dataService.getNav();
    this.activeSection =  this.navArr[0];
  }

  onSectionClick(_selection: string){
    this.activeSection = _selection;
  }

}
