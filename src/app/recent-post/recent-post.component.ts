import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interface/post';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {

  posts: IPost[] | null = null;
  errorFetchingData = false

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPost(5).subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      }
    });
  }
}
