import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public query: string;
  public result: string;

  @Input() labelButton: string;

  @Output()
  onResult: EventEmitter<any> = new EventEmitter();


  constructor() {
    this.query = '';
   }

   search() { 
     this.result = 'bla bla bla ' + this.query + '.';
     this.onResult.emit({query: this.query, result: this.result});
   }
 
  ngOnInit() {
    this.labelButton = this.labelButton ? this.labelButton : 'Search';
  }

}
