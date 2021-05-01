import { Injectable } from "@angular/core";
import { ToastService } from "angular-toastify";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService {
  constructor(private toastService: ToastService) {}

  errorHandler<T>(message: string) {
    return (error: any, caught: any) => {
      console.log(message);
      console.error(error);
      this.toastService.error(error);
      return of(caught as T);
    };
  }
}
