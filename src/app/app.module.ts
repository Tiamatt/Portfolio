import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules
import { AppRoutingModule} from './app-routing.module';
// services
import { DataService } from './shared/services/data.service';
// components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { NavComponent } from './main/nav/nav.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ActivitiesComponent } from './main/activities/activities.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ProjectModalComponent } from './main/projects/project-modal/project-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    NavComponent,
    ProjectsComponent,
    ActivitiesComponent,
    SkillsComponent,
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
