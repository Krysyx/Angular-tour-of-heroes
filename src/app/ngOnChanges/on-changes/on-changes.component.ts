import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-on-changes",
  templateUrl: "./on-changes.component.html",
  styleUrls: ["./on-changes.component.scss"],
})
export class OnChangesComponent implements OnInit, OnChanges {
  @Input() value: string;
  changes: SimpleChange;
  constructor() {}

  ngOnChanges({ value }: SimpleChanges): void {
    this.changes = value;
  }

  ngOnInit(): void {}
}
