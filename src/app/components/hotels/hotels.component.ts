import { Component, OnInit } from '@angular/core';
import { HotelsService, Hotel } from '../../services/hotels.service';
import { HotelsSearchService } from '../../services/hotels-search.service';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styles: []
})
export class HotelsComponent implements OnInit {
  //hotels: Hotel[] = [];
  hotels:any[];

  constructor(private _hotelsService: HotelsService, private _hotelSearchService: HotelsSearchService) {
    this._hotelSearchService.getAllHotels().subscribe(
      data => {
        this.hotels = data.hotels;
      })
  }

  ngOnInit() {

  }

  numberOfStarts(nStars: number) {
    return new Array(nStars).fill(nStars);
  }
  
}