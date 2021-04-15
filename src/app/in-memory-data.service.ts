import { Injectable } from "@angular/core";
import HEROES from "./data/mock-heroes";
import { Hero } from "./models/hero";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService {
  constructor() {}

  createDb() {
    return { heroes: HEROES };
  }

  generateId(heroes: Hero[]): number {
    return heroes.length ? Math.max(...heroes.map((hero) => hero.id)) + 1 : 11;
  }
}
