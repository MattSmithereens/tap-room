import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BeersComponent } from './beers/beers.component';
import { PatronsComponent } from './patrons/patrons.component';
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    PatronsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
