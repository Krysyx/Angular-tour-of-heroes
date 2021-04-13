import { Injectable } from "@angular/core";
import HEROES from "./data/mock-heroes";
import { Hero } from "./models/hero";

@Injectable({
  providedIn: "root",
})
export default class HeroService {
  constructor() {}

  getHeroes(): Hero[] {
    return HEROES;
  }
}
