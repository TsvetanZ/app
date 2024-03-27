import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    MainComponent,
    ThemeListComponent,
    NewThemeComponent,
    ThemeDetailComponent,
    RecentPostComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule
  ],
  exports: [
    ThemeListComponent
  ]
})
export class ThemeModule { }
