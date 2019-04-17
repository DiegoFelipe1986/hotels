import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './components/result/result.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'result/:term', component: ResultComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
