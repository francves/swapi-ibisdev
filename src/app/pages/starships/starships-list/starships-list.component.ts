import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Starship } from 'src/app/core/models/starship.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit, OnDestroy {

  subStarships: Subscription;

  displayedColumns: string[] = ['name', 'model', 'starship_class', 'MGLT', 'option'];
  dataSource: MatTableDataSource<Starship>;
  waitingService: boolean;

  constructor(
    private apiservice: ApiService,
    private router: Router
  ) {
    this.subStarships = new Subscription;
    this.dataSource = new MatTableDataSource();
    this.waitingService = false;
  }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships() {
    let starships: Starship[] = this.apiservice.getCurrentStarships();
    if (starships.length > 0) {
      this.initGrid(starships);
    } else {
      this.fetchData();
    }
  }

  initGrid(value: Starship[]) {
    console.log("value: ", value);
    this.dataSource.data = value;
  }

  fetchData() {
    this.waitingService = true;
    this.subStarships = this.apiservice.starships_current$.subscribe((value: Starship[]) => {
      this.initGrid(value);
      this.waitingService = false;
    })
    this.apiservice.getStarships();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateStarshipDetail(starship: Starship){
    this.apiservice.setCurrentStarship(starship);
    this.router.navigate(['/starships/detail']);
  }

  ngOnDestroy(): void {
    if (this.subStarships)
      this.subStarships.unsubscribe();
  }

}
