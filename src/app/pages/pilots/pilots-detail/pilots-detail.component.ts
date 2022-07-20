import { Component, OnInit } from '@angular/core';
import { Pilot } from 'src/app/core/models/pilot.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-pilots-detail',
  templateUrl: './pilots-detail.component.html',
  styleUrls: ['./pilots-detail.component.scss']
})
export class PilotsDetailComponent implements OnInit {

  pilot: Pilot | undefined;

  constructor(
    private apiservice: ApiService,
    private navigationService: NavigationService,
  ) { }

  ngOnInit(): void {
    this.pilot = this.apiservice.getCurrentPilot();
    if (!this.pilot)
      this.navigationService.back();
  }

}
