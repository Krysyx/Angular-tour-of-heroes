import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastService } from "angular-toastify";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-account-validation",
  templateUrl: "./account-validation.component.html",
  styleUrls: ["./account-validation.component.scss"],
})
export class AccountValidationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private registerService: RegisterService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  activateAccount(): void {
    this.registerService
      .verifyAccount(this.route.snapshot.queryParamMap.get("token"))
      .subscribe((response) => this.toastService.success(response));
  }
}
