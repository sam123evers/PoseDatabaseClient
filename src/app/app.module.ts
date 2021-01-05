import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { SearchComponent } from './search/search.component';
import { PoseDetailsComponent } from './pose-details/pose-details.component';
import { PoseListComponent } from './pose-list/pose-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    SearchComponent,
    PoseDetailsComponent,
    PoseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
