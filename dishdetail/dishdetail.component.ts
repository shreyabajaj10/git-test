import { Component, OnInit } from '@angular/core';
import { Med } from '../shared/med';
import { MedService } from '../services/med.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  
  med: Med;

  constructor(private medservice: MedService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.med = this.medservice.getMed(id);
  }

  goBack(): void {
    this.location.back();
  }

}


