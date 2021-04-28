import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomHero } from "../models/custom";
import contentType from "../utils/contentType";
import { api } from "../api/api";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CustomService {
  constructor(private http: HttpClient) {}

  private errorHandler<T>(message: string) {
    return (error: any, caught: any) => {
      console.log(message);
      console.error(error);
      return of(caught as T);
    };
  }

  createCustomHero(hero: CustomHero): Observable<CustomHero> {
    return this.http
      .post<CustomHero>(`${api}/custom/create`, hero, contentType)
      .pipe(catchError(this.errorHandler<CustomHero>("createCustomHero")));
  }

  getCustomHeroes(): Observable<CustomHero[]> {
    return this.http
      .get<CustomHero[]>(`${api}/custom/`, contentType)
      .pipe(catchError(this.errorHandler<CustomHero[]>("getCustomHeroes")));
  }
}
