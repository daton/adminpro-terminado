import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../login/register.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";

@NgModule({
  declarations: [PagesComponent,Graficas1Component,  DashboardComponent, ProgressComponent],
  exports: [PagesComponent,Graficas1Component,  DashboardComponent, ProgressComponent],
  imports:[SharedModule, PAGES_ROUTES]
})
export class PagesModule {}
