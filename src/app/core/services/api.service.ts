import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Starship } from '../models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string;
  starships_current: Starship[];
  private starships = new Subject<any[]>();
  starships_current$ = this.starships.asObservable();

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
    this.starships_current = []
   }

   getStarships() {
    this.http.get<Starship[]>(this.apiUrl + 'starships').subscribe((response: any) => {
      this.changeCurrentStarships(response.results);
    })
  }

  changeCurrentStarships(value: Starship[]) {
    this.starships_current = value;
    this.starships.next(value);
  }

  getCurrentStarships() {
    return this.starships_current;
  }

}
