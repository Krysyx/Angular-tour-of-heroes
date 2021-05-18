import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { api } from "../api/api";
import { CustomHero } from "../models/custom";
import contentType from "../utils/contentType";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class CustomService {
  constructor(private http: HttpClient, private errorService: ErrorHandlerService) {}

  createCustomHero(hero: CustomHero): Observable<CustomHero> {
    return this.http
      .post<CustomHero>(`${api}/custom/create`, hero, contentType)
      .pipe(catchError(this.errorService.handler()));
  }

  getCustomHeroes(): Observable<CustomHero[]> {
    return this.http
      .get<CustomHero[]>(`${api}/custom`, contentType)
      .pipe(catchError(this.errorService.handler()));
  }

  getCustomHero(id: string): Observable<CustomHero> {
    return this.http
      .get<CustomHero>(`${api}/custom/${id}`)
      .pipe(catchError(this.errorService.handler()));
  }

  deleteCustomHero(id: string): Observable<any> {
    return this.http
      .delete<CustomHero>(`${api}/custom/${id}`)
      .pipe(catchError(this.errorService.handler()));
  }

  getObservable(): Observable<any> {
    return new Observable((observer) => {
      observer.next("Hello");
      observer.next("World");
      observer.complete();
    });
  }
}
