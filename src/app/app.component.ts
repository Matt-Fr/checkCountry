import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Country } from './models/country';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  posts: any = [];
  ngOnInit(): void {
    this.fetchCountries();
  }
  public fetchCountries() {
    this.http
      .get<Country[]>('https://restcountries.com/v3.1/alpha?codes=FRA,BEL,GER')
      .subscribe((posts: any) => {
        console.log(posts);
      });
  }
}
