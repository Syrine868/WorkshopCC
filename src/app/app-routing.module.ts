import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { AddTypePlatComponent } from './add-type-plat/add-type-plat.component';
import { AppComponent } from './app.component';
import { DetailsPlatsComponent } from './details-plats/details-plats.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ListFeedbackComponent } from './list-feedback/list-feedback.component';
import { MenuComponent } from './menu/menu.component';
import { Plat } from './model/plat';
import { PlatsComponent } from './plats/plats.component';
import { RestoComponent } from './resto/resto.component';
import { TypeComponent } from './type/type.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { UpdateTypePlatComponent } from './update-type-plat/update-type-plat.component';


const routes: Routes = [
  { path: '', component:RestoComponent},
  { path: 'plats', component: PlatsComponent },
  { path: 'feedbacks', component: FeedbackComponent },
  { path: 'deletemenu/:id', component: MenuComponent },
  { path: 'updatemenu/:id', component: UpdateMenuComponent },
  { path: 'type', component: TypeComponent },
  { path: 'add-type-plat', component: AddTypePlatComponent},
  { path: 'deleteyps/:id', component:TypeComponent},
  { path: 'updatetypeplat/:id', component: UpdateTypePlatComponent },
  { path: 'add-plat', component: AddPlatComponent },
  { path: 'listefeedbacks', component: ListFeedbackComponent },
  { path: 'detailsplat/:id', component: DetailsPlatsComponent },
  {path: 'deletef/:id', component:ListFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
