import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateHeroComponent } from "./custom-hero/create-hero/create-hero.component";
import { CustomHeroesListComponent } from "./custom-hero/custom-heroes-list/custom-heroes-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/heroes.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "hero/create", component: CreateHeroComponent },
  { path: "hero/:id", component: HeroDetailComponent },
  { path: "custom-heroes", component: CustomHeroesListComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
