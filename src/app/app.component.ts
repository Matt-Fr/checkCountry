import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Country } from './models/country';
import { CountryThumbnailComponent } from './components/country-thumbnail/country-thumbnail.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CountryThumbnailComponent,
    SearchbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  posts: any = [];
  dada: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchCountries();
  }
  public fetchCountries() {
    this.http
      .get<Country[]>('https://restcountries.com/v3.1/alpha?codes=FRA,BEL,GER')
      .subscribe((posts: any) => {
        console.log(posts);
        this.dada = posts;
        console.log('dadada' + this.dada);
      });
  }
}
