import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { PassingdataComponent } from './passingdata/passingdata.component';


const routes: Routes = [
  {
    path: 'test1',
    component: Test1Component
  },
  {
    path: 'passing-data',
    component: PassingdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
