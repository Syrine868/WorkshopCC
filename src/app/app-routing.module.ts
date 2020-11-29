import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { AddTypePlatComponent } from './add-type-plat/add-type-plat.component';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MenuComponent } from './menu/menu.component';
import { Plat } from './model/plat';
import { PlatsComponent } from './plats/plats.component';
import { TypeComponent } from './type/type.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { UpdateTypePlatComponent } from './update-type-plat/update-type-plat.component';


const routes: Routes = [
  { path: '', component:MenuComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'plats', component: PlatsComponent },
  { path: 'feedbacks', component: FeedbackComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'deletemenu/:id', component: MenuComponent },
  { path: 'updatemenu/:id', component: UpdateMenuComponent },
  { path: 'type', component: TypeComponent },
  { path: 'add-type-plat', component: AddTypePlatComponent},
  { path: 'deletetypesplats/:id', component:TypeComponent},
  { path: 'updatetypeplat/:id', component: UpdateTypePlatComponent },
  { path: 'add-plat', component: AddPlatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
