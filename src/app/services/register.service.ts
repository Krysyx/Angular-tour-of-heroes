import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
    return this.http
      .post<string>(`${api}/register/create`, form, contentType)
      .pipe(catchError(this.errorHandler.errorHandler()));
  }
}
