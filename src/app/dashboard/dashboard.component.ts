import { Component, OnInit } from "@angular/core";
import { HeroService } from "../services/hero.service";
import { Hero } from "../models/hero";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  currentItem: string = "Television";
  items: string[] = [];
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.slice(1, 5);
    });
  }

  addItem(item: string) {
    this.items.push(item);
  }
}
