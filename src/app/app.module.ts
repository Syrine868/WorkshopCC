import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { PlatsComponent } from './plats/plats.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlatsComponent,
    FeedbackComponent,
    AddMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
