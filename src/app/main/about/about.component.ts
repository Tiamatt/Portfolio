import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../shared/styles/general.css']
})
export class AboutComponent implements OnInit {
  about: string;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.about = this.dataService.getAbout();
  }
}
