import { Component, OnInit } from '@angular/core';
import { Pilot } from 'src/app/core/models/pilot.model';
import { ApiService } from 'src/app/core/services/api.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { environment } from 'src/environments/environment';
import { createApi } from 'unsplash-js';

@Component({
  selector: 'app-pilots-detail',
  templateUrl: './pilots-detail.component.html',
  styleUrls: ['./pilots-detail.component.scss']
})
export class PilotsDetailComponent implements OnInit {

  pilot: Pilot | undefined;

  unsplash = createApi({
    accessKey: environment.unsplash_access_key,
  });
  randomPhotoUrl: string | undefined;

  constructor(
    private apiservice: ApiService,
    private navigationService: NavigationService,
  ) { }

  ngOnInit(): void {
    this.pilot = this.apiservice.getCurrentPilot();
    if (!this.pilot)
      this.navigationService.back();

    this.getRandomPhoto();
  }

  getRandomPhoto() {
    this.unsplash.search.getPhotos({
      query: "pilot",
      perPage: 1,
      orientation: 'landscape'
    }).then(value => {
      console.log("imagen: ", value);
      this.randomPhotoUrl = value.response?.results[0].urls.small
    }).catch(err => {
      console.log("Error: ", err);
    })
  }

}
