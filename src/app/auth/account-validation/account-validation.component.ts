import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-account-validation",
  templateUrl: "./account-validation.component.html",
  styleUrls: ["./account-validation.component.scss"],
})
export class AccountValidationComponent implements OnInit {
  constructor(private route: ActivatedRoute, private registerService: RegisterService) {}

  ngOnInit(): void {}

  activateAccount(): void {
    const token = this.route.queryParamMap.subscribe((queryParams) =>
      queryParams.get("token")
    );

    this.registerService
      .verifyAccount(token)
      .subscribe((response) => console.log(response));
  }
}
