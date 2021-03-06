import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { api } from "../api/api";
import { Hero } from "../models/hero";
import contentType from "../utils/contentType";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor(private http: HttpClient, private errorService: ErrorHandlerService) {}

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(`${api}/heroes`)
      .pipe(catchError(this.errorService.handler()));
  }

  getHero(id: string): Observable<any> {
    return this.http
      .get<Hero>(`${api}/heroes/${id}`)
      .pipe(catchError(this.errorService.handler()));
  }

  add(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${api}/heroes/create`, hero, contentType).pipe(
      tap(({ id }: Hero) => console.log(`New hero added, id: ${id}`)),
      catchError(this.errorService.handler())
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(`${api}/heroes/update`, hero, contentType).pipe(
      tap(() => console.log("HERO UPDATED")),
      catchError(this.errorService.handler())
    );
  }

  delete(id: string): Observable<any> {
    return this.http
      .delete(`${api}/heroes/${id}`, contentType)
      .pipe(catchError(this.errorService.handler()));
  }

  searchByName(term: string): Observable<any> {
    return !term.trim()
      ? of([])
      : this.http.get(`${api}/heroes/hero?name=${term}`).pipe(
          tap((results: Hero[] | []) =>
            results.length
              ? console.log(`Found ${results.length > 1 ? "heroes" : "a hero"} matching`)
              : console.log("No results")
          ),
          catchError(this.errorService.handler())
        );
  }
}
