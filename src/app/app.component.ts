import { Component, OnInit } from '@angular/core';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'swapi-ibisdev';

  constructor(
    private navigationService: NavigationService
  ){}

  ngOnInit(): void {
    this.navigationService.initNavigationService();
  }
}
