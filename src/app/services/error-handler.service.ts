import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastService } from "angular-toastify";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService {
  constructor(private toastService: ToastService) {}

  errorHandler(method: string) {
    return ({ error: { message } }: HttpErrorResponse) => {
      console.error(message);
      this.toastService.error(message);
      return throwError(message);
    };
  }
}
