import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { MovieDBService } from './services/movieDB.service';
import { MovieComponent } from './movie/movie.component'

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: SearchComponent},
  {path: 'movie/:id', component: MovieComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [MovieDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
