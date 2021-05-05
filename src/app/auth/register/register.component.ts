import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import capitalize from "../../utils/capitalizeFirstChar";
import pwRegex from "../../utils/pwRegex";
import FORM_ERROR_HANDLER from "../../utils/registerErrorsMapper";
import validatorsMapper from "../../utils/validatorsMapper";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group({
    username: ["", validatorsMapper([Validators.minLength(3)])],
    firstname: [""],
    lastname: [""],
    email: ["", validatorsMapper([Validators.email])],
    password: ["", validatorsMapper([Validators.pattern(pwRegex)])],
    confirmpassword: ["", validatorsMapper([Validators.pattern(pwRegex)])],
    age: [""],
    phone: [""],
    location: this.formBuilder.group({
      city: ["", Validators.required],
      address: ["", Validators.required],
    }),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.registerForm.value);
  }

  capitalize(value: string | unknown): string {
    return capitalize(value);
  }

  isFormGroup(key: string): boolean {
    return key == "location";
  }

  hasErrors(input: string): boolean {
    const control = this.registerForm.controls;
    return control[input].errors && (control[input].dirty || control[input].touched);
  }

  getErrorMessage(key: string): string {
    return FORM_ERROR_HANDLER[key];
  }
}
