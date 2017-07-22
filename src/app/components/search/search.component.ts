import { Component, OnInit } from '@angular/core';

import { Show, Episodes } from '../../classes/show/show';
import { ShowService } from '../../services/show/show.service';

import { MdButtonModule, MdCardModule, MdProgressSpinnerModule, MdInputModule } from '@angular/material';



import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ ShowService ]
})
export class SearchComponent implements OnInit {

  searchResults;
  errorMessage;

  private searchSubject: Subject<any> = new Subject();

  constructor( private showService: ShowService ) {
    this.searchSubject.debounceTime(450).distinctUntilChanged().subscribe(
      term => this.doSearch(term)
    );
  }

  ngOnInit() {
  }

  searchChanged(term) {
    this.searchSubject.next(term);
  }

  doSearch(term) {
    this.showService.search(term).subscribe(
      show => this.searchResults = show.results,
      error => this.errorMessage = <any>error,
      () => null
    );
  }

}
