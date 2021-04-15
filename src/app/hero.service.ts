import { Injectable } from "@angular/core";
import HEROES from "./data/mock-heroes";
import { Hero } from "./models/hero";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  url: string = "/api/heroes";
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

  getHero(id: number) {
    this.http
      .get<Hero>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError(`getHero id=${id}`)));
  }
}
