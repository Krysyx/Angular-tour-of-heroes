import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CustomService } from "../services/custom.service";

@Component({
  selector: "app-unsubscription",
  templateUrl: "./unsubscription.component.html",
  styleUrls: ["./unsubscription.component.scss"],
})
export class UnsubscriptionComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  constructor(private customService: CustomService) {}

  ngOnInit(): void {
    this.subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  subscribe(): void {
    this.subscriptions.add(
      this.customService.getObservable().subscribe((value) => console.log(value))
    );
  }
}
