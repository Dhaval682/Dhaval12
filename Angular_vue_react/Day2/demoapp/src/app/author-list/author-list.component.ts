import { Component, OnInit,Input } from '@angular/core';
import { Author } from 'src/Models/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  @Input() AuthorInfo!: Author[];


  constructor() {

  }

  ngOnInit(): void {

  }

}
