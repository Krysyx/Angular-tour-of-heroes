import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-trigger",
  templateUrl: "./trigger.component.html",
  styleUrls: ["./trigger.component.scss"],
})
export class TriggerComponent implements OnInit {
  value = "Default";

  constructor() {}

  ngOnInit(): void {}

  updateValue(newValue: string): void {
    this.value = newValue;
  }
}
