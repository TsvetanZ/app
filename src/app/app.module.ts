import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
//import { RecentPostComponent } from './theme/recent-post/recent-post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { MainComponent } from './theme/main/main.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { ImageUploadComponent } from './image-upload/image-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
  ],
  imports: [
    AuthModule,
    ThemeModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
