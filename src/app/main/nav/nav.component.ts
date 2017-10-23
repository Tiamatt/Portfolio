import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navArr : string[] = ['About', 'Skills', 'Projects', 'Experience', 'Activities', 'Contact'];
  activeSection : string;
  
  constructor() { }

  ngOnInit() {
    this.initialValues();
  }

  initialValues(){
    this.activeSection =  this.navArr[0];
  }

  onSectionClick(_selection: string){
    this.activeSection = _selection;
  }

}
