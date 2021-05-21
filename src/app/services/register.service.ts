import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Register, ValidatedAccount, ValidatedToken } from "../models/register";
import { api } from "../api/api";
import contentType from "../utils/contentType";
import { catchError } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient, private errorService: ErrorHandlerService) {}

  register(form: Register): Observable<string> {
    contentType["responseType"] = "text" as "json";
    return this.http
      .post<string>(`${api}/register/create`, form, contentType)
      .pipe(catchError(this.errorService.handler()));
  }

  verifyAccount(token: string): Observable<ValidatedAccount> {
    contentType["responseType"] = "text" as "json";
    return this.http
      .get<ValidatedAccount>(`${api}/register/verify?token=${token}`, contentType)
      .pipe(catchError(this.errorService.handler()));
  }

  verifyTokenValidity(token: string): Observable<ValidatedToken> {
    return this.http
      .get<ValidatedToken>(`${api}/register/validity/${token}`, contentType)
      .pipe(catchError(this.errorService.handler()));
  }

  refreshToken(token: string): Observable<string> {
    return this.http
      .post<string>(`${api}/register/refresh_token?token=${token}`, contentType)
      .pipe(catchError(this.errorService.handler()));
  }
}
