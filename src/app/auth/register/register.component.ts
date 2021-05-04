import { KeyValue } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import capitalize from "../../utils/capitalizeFirstChar";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group({
    username: [""],
    firstname: [""],
    lastname: [""],
    email: [""],
    age: [""],
    phone: [""],
    location: this.formBuilder.group({
      city: [""],
      address: [""],
    }),
  });

  ngOnInit(): void {
    console.log(this.registerForm.controls);
  }

  onSubmit(): void {}

  capitalize(value: string | unknown): string {
    return capitalize(value);
  }

  isFormGroup(key: string): boolean {
    return key == "location";
  }
}
