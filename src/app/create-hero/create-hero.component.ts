import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { CustomHero } from "../models/custom";
import { CustomService } from "../services/custom.service";
import hs from "../utils/heroStats";

@Component({
  selector: "app-create-hero",
  templateUrl: "./create-hero.component.html",
  styleUrls: ["./create-hero.component.scss"],
})
export class CreateHeroComponent implements OnInit {
  heroForm = this.formBuilder.group({
    name: ["", Validators.required],
    HP: [""],
    spellpower: [""],
    mana: [""],
    spells: this.formBuilder.group({
      offensive: [""],
      defensive: [""],
    }),
    // downRanks: this.formBuilder.array([this.formBuilder.control("")]),
  });

  inputs: string[] = Object.keys(this.heroForm.controls).filter((key) =>
    hs.includes(key)
  );

  spells: string[] = Object.keys(this.heroForm.controls["spells"]["controls"]);

  constructor(private formBuilder: FormBuilder, private customService: CustomService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const result = Object.entries(this.heroForm.controls).map(([key, { value }]) => [
      key,
      value,
    ]);

    this.customService.createCustomHero(Object.fromEntries(result) as CustomHero);
  }

  updateFields(): void {
    this.heroForm.controls.spells.patchValue({
      offensive: "Krysyx",
      defensive: 7000,
    });
  }

  getDownRanks() {
    return this.heroForm.get("downRanks") as FormArray;
  }

  addDownRank() {
    this.getDownRanks().push(this.formBuilder.control(""));
  }
}
