import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pilot } from '../models/pilot.model';
import { Starship } from '../models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string;
  starships_current: Starship[];
  private starships = new Subject<any[]>();
  starships_current$ = this.starships.asObservable();
  starship_current: Starship | undefined;

  pilots_current: Pilot[];
  private pilots = new Subject<any[]>();
  pilots_current$ = this.pilots.asObservable();
  pilot_current: Pilot | undefined;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
    this.starships_current = [];
    this.pilots_current = [];
   }

   /* Starships */

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

  setCurrentStarship(value: Starship) {
    this.starship_current = value;
  }

  getCurrentStarship(){
    return this.starship_current;
  }

  /* People */

  getPilots(pilotsUrl: string[]) {
    let observableArray: any = [];
    for (const url of pilotsUrl) {
      observableArray.push(this.getPilot(url));
    }
    console.log("pilotsUrl")
    forkJoin<Pilot[]>(observableArray)
      .subscribe((data: Pilot[]) => {
        console.log("data: ", data);
        this.changeCurrentPilots(data);
    })
  }

  getPilot(pilotUrl: string) {
    return this.http.get<any[]>(pilotUrl);
  }

  changeCurrentPilots(value: Pilot[]) {
    this.pilots_current = value;
    this.pilots.next(value);
  }

  getCurrentPilots() {
    return this.pilots_current;
  }

  setCurrentPilot(value: Pilot) {
    this.pilot_current = value;
  }

  getCurrentPilot(){
    return this.pilot_current;
  }

}
