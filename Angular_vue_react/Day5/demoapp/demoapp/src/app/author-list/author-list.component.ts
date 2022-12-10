import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Author } from 'src/Models/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  @Input() AuthorInfo!: Author[];

  @Output() likedevent=new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {

  }
  list:Array<Author>=[];
  LikeAuthor(item:Author,input:HTMLElement)
  {
    
    input?.setAttribute('disabled', '');
    this.list.push(item);
    this.likedevent.emit(this.list);
  }

}
