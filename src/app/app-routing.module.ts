import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MainComponent } from './main/main.component';
import { ProjectListComponent } from './project-list/project-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'projects', component: ProjectListComponent },
    { path: '**', redirectTo: '/main' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}
