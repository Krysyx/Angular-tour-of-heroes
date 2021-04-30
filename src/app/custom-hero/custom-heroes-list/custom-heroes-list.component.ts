import { Component, OnInit } from "@angular/core";
import { CustomHero } from "src/app/models/custom";
import { CustomService } from "src/app/services/custom.service";

@Component({
  selector: "app-custom-heroes-list",
  templateUrl: "./custom-heroes-list.component.html",
  styleUrls: ["./custom-heroes-list.component.scss"],
})
export class CustomHeroesListComponent implements OnInit {
  customHeroes: CustomHero[] = [];
  constructor(private customService: CustomService) {}

  ngOnInit(): void {
    this.getCustomHeroes();
  }

  getCustomHeroes(): void {
    this.customService
      .getCustomHeroes()
      .subscribe((customHeroes) => (this.customHeroes = customHeroes));
  }

  deleteCustomHero(customHeroId: string): void {
    this.customService
      .deleteCustomHero(customHeroId)
      .subscribe(
        () =>
          (this.customHeroes = this.customHeroes.filter(
            ({ id }) => !(id === customHeroId)
          ))
      );
  }
}
