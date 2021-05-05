import { ValidatorFn, Validators } from "@angular/forms";

export default (validators: ValidatorFn[]) =>
  Validators.compose([Validators.required, ...validators]);
