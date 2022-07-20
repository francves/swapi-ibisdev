import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pilot } from 'src/app/core/models/pilot.model';
import { Starship } from 'src/app/core/models/starship.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-starships-detail',
  templateUrl: './starships-detail.component.html',
  styleUrls: ['./starships-detail.component.scss']
})
export class StarshipsDetailComponent implements OnInit, OnDestroy {

  starship: Starship | undefined;
  subPilots: Subscription;
  pilotList: Pilot[];

  constructor(
    private apiservice: ApiService,
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.subPilots = new Subscription;
    this.pilotList = [];
  }

  ngOnInit(): void {
    this.starship = this.apiservice.getCurrentStarship();
    if (!this.starship)
      this.navigationService.back();
  }

  showPilots() {
    return this.starship ? this.starship.pilots.length > 0 : false;
  }

  fetchPilots() {
    this.subPilots = this.apiservice.pilots_current$.subscribe((value: Pilot[]) => {
      this.initPilotsLits(value);
    })
    const pilots = this.starship ? this.starship.pilots : [""];
    this.apiservice.getPilots(pilots);
  }

  initPilotsLits(value: Pilot[]) {
    this.pilotList = value;
  }

  navigatePilotDetail(pilot: Pilot) {
    this.apiservice.setCurrentPilot(pilot);
    this.router.navigate(['/pilots/detail']);
  }

  ngOnDestroy(): void {
    if (this.subPilots)
      this.subPilots.unsubscribe();
  }

}
