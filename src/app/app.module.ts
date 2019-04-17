import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { HotelsService } from './services/hotels.service';
import { HotelsSearchService } from './services/hotels-search.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotelsComponent,
    SearchComponent,
    ResultComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,
HttpClientModule],
  providers: [HotelsService, HotelsSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
