import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    //{ path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '', component: MainComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}
