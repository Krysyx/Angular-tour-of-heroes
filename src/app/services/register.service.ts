import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Register } from "../models/register";
import { api } from "../api/api";
import contentType from "../utils/contentType";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(form: Register): Observable<Register> {
    return this.http.post<Register>(`${api}/register/create`, form, contentType);
  }
}
