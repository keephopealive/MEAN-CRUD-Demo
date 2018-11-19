import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConctactUsComponent } from './conctact-us/conctact-us.component';
import { EditWidgetComponent } from './edit-widget/edit-widget.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" }, 
  { path: "editwidget/:id", component: EditWidgetComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
