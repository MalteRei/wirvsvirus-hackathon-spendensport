import { Component, OnInit, Input } from '@angular/core';
import { ISearchProvider } from '../interfaces/ISearchProvider';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private previousSearchTerm: string;

  private SearchProvider: ISearchProvider<any>;
  public get searchProvider(): ISearchProvider<any> {
    return this.SearchProvider;
  }
  @Input() public set searchProvider(value: ISearchProvider<any>) {
    this.SearchProvider = value;
  }

  public donationSearch(event: KeyboardEvent) {
    console.log('donation search');
    console.dir((event.target as HTMLInputElement).value);
    if ((event.target as HTMLInputElement).value.length > 3) {
      if((event.target as HTMLInputElement).value !== this.previousSearchTerm && event.key !== 'Enter') {
        this.SearchProvider.search((event.target as HTMLInputElement).value);
        this.previousSearchTerm = (event.target as HTMLInputElement).value;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
