import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  posts;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getList()
      .subscribe((posts) => this.posts = posts);
  }
}
