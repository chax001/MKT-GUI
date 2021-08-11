import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BbgboComponent } from './components/bbgbo/bbgbo.component';

const routes: Routes = [
  {
    path:'bbgbo',
    component:BbgboComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
