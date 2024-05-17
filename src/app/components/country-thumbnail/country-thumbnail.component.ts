import { Component, Input } from '@angular/core';
import { Country } from '../../models/country';
Input;
@Component({
  selector: 'app-country-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './country-thumbnail.component.html',
  styleUrl: './country-thumbnail.component.css',
})
export class CountryThumbnailComponent {
  @Input() country!: Country;
}
