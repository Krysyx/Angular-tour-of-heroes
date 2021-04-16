import { Component, OnInit } from "@angular/core";
import { Hero } from "../models/hero";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  addHero(name: string): void {
    name = name.trim();
    name && this.heroService.add({ name }).subscribe((hero) => this.heroes.push(hero));
  }

  deleteHero({ id }: Hero): void {
    this.heroService
      .delete(id)
      .subscribe(
        () =>
          (this.heroes = this.heroes.filter(({ id: heroId }: Hero) => !(heroId === id)))
      );
  }
}
