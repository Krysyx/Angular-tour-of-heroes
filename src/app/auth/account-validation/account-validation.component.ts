import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastService } from "angular-toastify";
import { Register } from "src/app/models/register";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-account-validation",
  templateUrl: "./account-validation.component.html",
  styleUrls: ["./account-validation.component.scss"],
})
export class AccountValidationComponent implements OnInit {
  text = "Send a new activation email";
  isValid = false;
  loader = false;
  expired = false;
  token = this.route.snapshot.queryParamMap.get("token");
  constructor(
    private route: ActivatedRoute,
    private registerService: RegisterService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.registerService.verifyTokenValidity(this.token).subscribe(
    //   ({ userId, isValid }) => {
    //     this.isValid = isValid;
    //     localStorage.setItem("user", userId);
    //   },
    //   (error) => {
    //     this.router.navigate(["/404"]);
    //   }
    // );
  }

  activateAccount(): void {
    this.loader = true;
    this.registerService
      .verifyAccount(this.token)
      .subscribe(
        ({ message }) => {
          this.toastService.success(message);
          this.router.navigate(["/login"]);
        },
        ({ statusCode }) => {
          if (statusCode === 403) {
            this.expired = true;
          }
        }
      )
      .add(() => (this.loader = false));
  }

  refreshToken(): void {
    const id = localStorage.getItem("user");
    this.loader = true;
    this.registerService
      .refreshToken(id)
      .subscribe((response) => {
        this.text = "Please verify your email";
        this.toastService.success(response);
      })
      .add(() => (this.loader = false));
  }
}
