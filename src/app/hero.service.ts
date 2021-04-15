import { Injectable } from "@angular/core";
import HEROES from "./data/mock-heroes";
import { Hero } from "./models/hero";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(heroId: number) {
    return of(HEROES.find(({ id }) => heroId === id));
  }
}
