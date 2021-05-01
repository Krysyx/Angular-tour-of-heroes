import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { ToastService } from "angular-toastify";
import { CustomService } from "../../services/custom.service";
import inputType from "../../utils/customHeroInputType";
import stats from "../../utils/heroStats";

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
  });

  inputs: string[] = Object.keys(this.heroForm.controls).filter((key) =>
    stats.includes(key)
  );

  spells: string[] = Object.keys(this.heroForm.controls["spells"]["controls"]);

  constructor(
    private formBuilder: FormBuilder,
    private customService: CustomService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.customService
      .createCustomHero(this.heroForm.value)
      .subscribe(() => this.toastService.success("Hero successfully created"));

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
