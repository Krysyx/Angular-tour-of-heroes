import { Component, OnInit } from "@angular/core";
import { CustomHero } from "src/app/models/custom";
import { CustomService } from "src/app/services/custom.service";
import capitalizeFirstChar from "src/app/utils/capitalizeFirstChar";

@Component({
  selector: "app-custom-hero-detail",
  templateUrl: "./custom-hero-detail.component.html",
  styleUrls: ["./custom-hero-detail.component.scss"],
})
export class CustomHeroDetailComponent implements OnInit {
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

  isObject(item: string | Object) {
    return item === Object(item);
  }

  getSpells(object: Object): Object {
    return object;
  }

  capitalize(str: any): any {
    return capitalizeFirstChar(str);
  }
}
