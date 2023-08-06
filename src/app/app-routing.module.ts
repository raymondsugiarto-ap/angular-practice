import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
