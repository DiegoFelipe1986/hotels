import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../../services/hotels.service';
import { HotelsSearchService } from '../../services/hotels-search.service';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: []
})
export class ResultComponent implements OnInit {
  buscar: string = "";
  hotels;
  term: string;

  constructor(private activatedRoute: ActivatedRoute, private _hotelService: HotelsService, private _hotelServiceSearch: HotelsSearchService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.term = params.term;
      
      this._hotelServiceSearch
        .searchHotels(params.term)
        .subscribe(hotels => {
          this.hotels = hotels;
        });
    });
  }

  // searchHotels(term: string) {
  //   let hotelsArr: any[] = [];
  //   term = term.toLowerCase();

  //   for (let hotel of this.hotels) {
  //     let name = hotel.name.toLowerCase();
  //     if (name.indexOf(term) >= 0) {
  //       hotelsArr.push(hotel)
  //     }
  //   }

  //   return hotelsArr;
  // }
  numberOfStarts(nStars: number) {
    return new Array(nStars).fill(nStars);
  }
}
