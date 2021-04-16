import { Injectable } from "@angular/core";
import { Hero } from "./models/hero";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  url: string = "/api/heroes";
  contentType = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}

  private handleError<T>(message: string, result?: T) {
    return (error: any) => {
      console.error(error);
      console.log(message);
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.url)
      .pipe(catchError(this.handleError("getHeroes", [])));
  }

  getHero(id: number): Observable<any> {
    return this.http
      .get<Hero>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError(`getHero id=${id}`)));
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.url, hero, this.contentType).pipe(
      tap(() => console.log("HERO UPDATED")),
      catchError(this.handleError("updateHero"))
    );
  }

  add(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.url, hero, this.contentType).pipe(
      tap(({ id }: Hero) => console.log(`New hero added, id: ${id}`)),
      catchError(this.handleError<Hero>("addHero"))
    );
  }

  delete(id: number): Observable<any> {
    return this.http
      .delete(`${this.url}/${id}`, this.contentType)
      .pipe(catchError(this.handleError("deleteHero")));
  }
}
