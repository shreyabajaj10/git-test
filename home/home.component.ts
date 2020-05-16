import { Component, OnInit } from '@angular/core';
import { Med } from '../shared/med';
import { MedService } from '../services/med.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  med: Med;
  promotion: Promotion;
  leader: Leader;

  constructor(private medservice: MedService, private leaderservice: LeaderService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
    this.med = this.medservice.getFeaturedMed();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leaderservice.getFeaturedLeader();
  }
}
