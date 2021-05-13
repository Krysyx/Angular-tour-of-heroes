import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastService } from "angular-toastify";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-account-validation",
  templateUrl: "./account-validation.component.html",
  styleUrls: ["./account-validation.component.scss"],
})
export class AccountValidationComponent implements OnInit {
  loader: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private registerService: RegisterService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  activateAccount(): void {
    this.loader = true;
    this.registerService
      .verifyAccount(this.route.snapshot.queryParamMap.get("token"))
      .subscribe((response) => {
        this.toastService.success(response);
        this.router.navigate(["/login"]);
      })
      .add(() => (this.loader = false));
  }
}
