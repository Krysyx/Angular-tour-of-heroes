import { KeyValue } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { CustomHero, Spells } from "src/app/models/custom";
import { CustomService } from "src/app/services/custom.service";
import capitalizeFirstChar from "../../utils/capitalizeFirstChar";

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
