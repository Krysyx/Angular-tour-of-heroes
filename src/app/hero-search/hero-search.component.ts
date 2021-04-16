import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { HeroService } from "../hero.service";
import { Hero } from "../models/hero";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.scss"],
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private terms = new Subject<string>();
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.terms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchByName(term))
    );
  }

  search(terms: string): void {
    this.terms.next(terms);
  }
}
