import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'btn-back',
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.scss']
})
export class BtnBackComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.navigationService.back();
  }

}
