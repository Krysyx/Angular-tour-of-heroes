import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { CreateHeroComponent } from "./custom-hero/create-hero/create-hero.component";
import { EventEmitterComponent } from "./event-emitter/event-emitter.component";
import { CustomHeroesListComponent } from "./custom-hero/custom-heroes-list/custom-heroes-list.component";
import { CustomHeroDetailComponent } from "./custom-hero/custom-hero-detail/custom-hero-detail.component";
import { ToastService, AngularToastifyModule } from "angular-toastify";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { OnChangesComponent } from "./ngOnChanges/on-changes/on-changes.component";
import { TriggerComponent } from './ngOnChanges/trigger/trigger.component';
import { UnsubscriptionComponent } from './unsubscription/unsubscription.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountValidationComponent } from './auth/account-validation/account-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    CreateHeroComponent,
    EventEmitterComponent,
    CustomHeroesListComponent,
    CustomHeroDetailComponent,
    OnChangesComponent,
    TriggerComponent,
    UnsubscriptionComponent,
    RegisterComponent,
    AccountValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularToastifyModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
