import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-event-emitter",
  templateUrl: "./event-emitter.component.html",
  styleUrls: ["./event-emitter.component.scss"],
})
export class EventEmitterComponent implements OnInit {
  @Input() item: string;
  @Output() newItem = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addItem(item: string): void {
    this.newItem.emit(item);
  }
}
