import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Register } from "../models/register";
import { api } from "../api/api";
import contentType from "../utils/contentType";
import { catchError } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  register(form: Register): Observable<string> {
    contentType["responseType"] = "text" as "json";
    return this.http
      .post<string>(`${api}/register/create`, form, contentType)
      .pipe(catchError(this.errorHandler.errorHandler()));
  }

  verifyAccount(token: string): Observable<string> {
    contentType["responseType"] = "text" as "json";
    return this.http
      .get<string>(`${api}/register/verify?token=${token}`, contentType)
      .pipe(catchError(this.errorHandler.errorHandler()));
  }

  verifyTokenValidity(token: string): Observable<boolean> {
    return this.http
      .get<boolean>(`${api}/register/validity/${token}`, contentType)
      .pipe(catchError(this.errorHandler.errorHandler()));
  }
}
