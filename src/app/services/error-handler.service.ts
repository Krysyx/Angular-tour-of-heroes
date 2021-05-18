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
      const err = JSON.parse(error);
      this.toastService.error(err.message);
      return throwError(err);
    };
  }
}
