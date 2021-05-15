import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountValidationComponent } from "./auth/account-validation/account-validation.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CreateHeroComponent } from "./custom-hero/create-hero/create-hero.component";
import { CustomHeroDetailComponent } from "./custom-hero/custom-hero-detail/custom-hero-detail.component";
import { CustomHeroesListComponent } from "./custom-hero/custom-heroes-list/custom-heroes-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { TriggerComponent } from "./ngOnChanges/trigger/trigger.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UnsubscriptionComponent } from "./unsubscription/unsubscription.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "custom-hero/create", component: CreateHeroComponent },
  { path: "hero/:id", component: HeroDetailComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "custom-heroes/:id", component: CustomHeroDetailComponent },
  { path: "custom-heroes", component: CustomHeroesListComponent },
  { path: "on-changes", component: TriggerComponent },
  { path: "unsubscribe", component: UnsubscriptionComponent },
  { path: "register", component: RegisterComponent },
  { path: "account/activation", component: AccountValidationComponent },
  { path: "login", component: LoginComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
