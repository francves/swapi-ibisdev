import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Starship } from 'src/app/core/models/starship.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-starships-detail',
  templateUrl: './starships-detail.component.html',
  styleUrls: ['./starships-detail.component.scss']
})
export class StarshipsDetailComponent implements OnInit {

  starship: Starship | undefined;

  constructor(
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
    this.starship = this.apiservice.getCurrentStarship();
  }

}
