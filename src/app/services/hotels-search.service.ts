import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class HotelsSearchService {
  hotels: any;

  constructor(private http: HttpClient) {}

  getAllHotels() {
    const hotels = this.http.get<any>('http://localhost:3000/hotel');
    return hotels;
  }

  searchHotels(term: string) {

    return this.getAllHotels().pipe(
      map(({hotels}) => {
        this.hotels = {hotels};
        return hotels.filter(({ name }) => name.indexOf(term) > -1);
      })
    );
  }
}
