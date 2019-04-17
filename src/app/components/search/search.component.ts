import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsSearchService } from '../../services/hotels-search.service';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  constructor(
    private router: Router,
    private hotelsSearchServices: HotelsSearchService
  ) {}

  ngOnInit() {}

  buscarHotel() {
    console.log('aqui')
    if (this.buscarHotel.length == 0) {
      return;
    }
    this.hotelsSearchServices.searchHotels(this.buscar).subscribe();
  }

  searchHotel(term: string) {
    if (term.length >= 3) {
      this.router.navigate(["/result", term]);
    } else {
      return;
    }
  }
}
