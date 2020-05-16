import { Component, OnInit } from '@angular/core';
import { Med } from '../shared/med';
import { MedService } from '../services/med.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  medicines: Med[];

  selectedDish: Med;


  constructor(private medService: MedService) { }

  ngOnInit() {
    this.medicines = this.medService.getMedicines();
  }

  onSelect(med: Med) {
    this.selectedDish = med;
  }


}
