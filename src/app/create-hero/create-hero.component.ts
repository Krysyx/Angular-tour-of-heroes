import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-create-hero",
  templateUrl: "./create-hero.component.html",
  styleUrls: ["./create-hero.component.scss"],
})
export class CreateHeroComponent implements OnInit {
  heroForm = new FormGroup({
    name: new FormControl(null),
    HP: new FormControl(null),
    spellpower: new FormControl(null),
    mana: new FormControl(null),
  });
  inputs: string[] = Object.keys(this.heroForm.controls);
  constructor() {}

  ngOnInit(): void {}
}
