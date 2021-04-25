import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  currentItem: string = "Television";
  items: string[] = [];
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}

  addItem(item: string) {
    this.items.push(item);
  }
}
