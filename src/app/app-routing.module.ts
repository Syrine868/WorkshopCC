import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MenuComponent } from './menu/menu.component';
import { Plat } from './model/plat';
import { PlatsComponent } from './plats/plats.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'plats', component: PlatsComponent },
  { path: 'feedbacks', component: FeedbackComponent },
  { path: 'add-menu', component:AddMenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
