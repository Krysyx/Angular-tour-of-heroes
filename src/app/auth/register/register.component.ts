import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import capitalize from "../../utils/capitalizeFirstChar";
import pwRegex from "../../utils/pwRegex";
import FORM_ERROR_HANDLER from "../../utils/registerErrorsMapper";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group({
    username: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    firstname: [""],
    lastname: [""],
    email: ["", Validators.compose([Validators.required, Validators.email])],
    password: [
      "",
      Validators.compose([Validators.required, Validators.pattern(pwRegex)]),
    ],
    age: [""],
    phone: [""],
    location: this.formBuilder.group({
      city: ["", Validators.required],
      address: ["", Validators.required],
    }),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.registerForm.controls.email.errors);
  }

  capitalize(value: string | unknown): string {
    return capitalize(value);
  }

  isFormGroup(key: string): boolean {
    return key == "location";
  }

  hasErrors(input: string): boolean {
    const control = this.registerForm.controls;
    console.log(control[input].pristine || control[input].touched);

    return control[input].errors && (control[input].dirty || control[input].touched);
  }

  getErrorMessage(key: string): string {
    return FORM_ERROR_HANDLER[key];
  }
}
