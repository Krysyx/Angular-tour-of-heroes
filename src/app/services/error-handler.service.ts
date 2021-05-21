import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastService } from "angular-toastify";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService {
  constructor(private toastService: ToastService) {}

  handler() {
    return ({ error }: HttpErrorResponse) => {
      console.error(error);
      this.toastService.error(error.message);
      return throwError(error);
    };
  }
}
