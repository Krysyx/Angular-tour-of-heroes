import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { CustomHero } from "../../models/custom";
import { CustomService } from "../../services/custom.service";
import stats from "../../utils/heroStats";
import inputType from "../../utils/customHeroInputType";

@Component({
  selector: "app-create-hero",
  templateUrl: "./create-hero.component.html",
  styleUrls: ["./create-hero.component.scss"],
})
export class CreateHeroComponent implements OnInit {
  heroForm = this.formBuilder.group({
    name: ["", Validators.required],
    hp: [""],
    spellpower: [""],
    mana: [""],
    spells: this.formBuilder.group({
      offensive: [""],
      defensive: [""],
    }),
    // downRanks: this.formBuilder.array([this.formBuilder.control("")]),
  });

  inputs: string[] = Object.keys(this.heroForm.controls).filter((key) =>
    stats.includes(key)
  );

  spells: string[] = Object.keys(this.heroForm.controls["spells"]["controls"]);

  constructor(private formBuilder: FormBuilder, private customService: CustomService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.customService
      .createCustomHero(this.heroForm.value)
      .subscribe((customHero) => console.log("Hero created : ", customHero));

    this.heroForm.reset();
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

  getInputType(inputName: string) {
    return inputType[inputName] ?? "text";
  }
}
