import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[] | null = null;
  errorFetchingData = false

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err)
      }
    });
  }

}
