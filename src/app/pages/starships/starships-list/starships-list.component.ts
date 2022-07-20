import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(
    private apiservice: ApiService
  ) {
    this.subStarships = new Subscription;
    this.dataSource = new MatTableDataSource();
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
    this.subStarships = this.apiservice.starships_current$.subscribe((value: Starship[]) => {
      this.initGrid(value);
    })
    this.apiservice.getStarships();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    if (this.subStarships)
      this.subStarships.unsubscribe();
  }

}
