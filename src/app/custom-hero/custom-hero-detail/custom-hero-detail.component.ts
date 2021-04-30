import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomHero } from "src/app/models/custom";
import { CustomService } from "src/app/services/custom.service";
import capitalizeFirstChar from "src/app/utils/capitalizeFirstChar";

@Component({
  selector: "app-custom-hero-detail",
  templateUrl: "./custom-hero-detail.component.html",
  styleUrls: ["./custom-hero-detail.component.scss"],
})
export class CustomHeroDetailComponent implements OnInit {
  constructor(
    private customService: CustomService,
    private location: Location,
    private router: ActivatedRoute
  ) {}
  customHero: CustomHero;
  customHeroId: string = this.router.snapshot.paramMap.get("id");

  ngOnInit(): void {
    this.getCustomHero();
  }

  getCustomHero() {
    this.customService
      .getCustomHero(this.customHeroId)
      .subscribe((customHero) => (this.customHero = customHero));
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

  goBack(): void {
    this.location.back();
  }
}
