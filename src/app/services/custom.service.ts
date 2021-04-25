import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomHero } from "../models/custom";
import contentType from "../utils/contentType";
import { api } from "../api/api";

@Injectable({
  providedIn: "root",
})
export class CustomService {
  constructor(private http: HttpClient) {}

  createCustomHero(hero: CustomHero): void {
    console.log(hero);
    // this.http.post<CustomHero>(`${api}/custom/create`, hero, contentType);
  }
}
