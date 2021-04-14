import { Injectable } from "@angular/core";
import HEROES from "./data/mock-heroes";
import { Hero } from "./models/hero";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService : Heroes fetched !");
    return of(HEROES);
  }
}
