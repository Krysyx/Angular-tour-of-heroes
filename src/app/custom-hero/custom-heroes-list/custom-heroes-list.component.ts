import { Component, OnInit } from "@angular/core";
import { CustomHero } from "src/app/models/custom";
import { CustomService } from "src/app/services/custom.service";

@Component({
  selector: "app-custom-heroes-list",
  templateUrl: "./custom-heroes-list.component.html",
  styleUrls: ["./custom-heroes-list.component.scss"],
})
export class CustomHeroesListComponent implements OnInit {
  constructor(private customService: CustomService) {}
  customHeroes: CustomHero[] = [];

  ngOnInit(): void {
    this.getCustomHeroes();
  }

  getCustomHeroes() {
    this.customService
      .getCustomHeroes()
      .subscribe((customHeroes) => (this.customHeroes = customHeroes));
  }
}
