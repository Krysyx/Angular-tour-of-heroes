import { Component, OnInit } from "@angular/core";
import { Hero } from "../models/hero";
import HEROES from "../data/mock-heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = HEROES;
  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
