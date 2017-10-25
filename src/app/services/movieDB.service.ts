import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()

export class MovieDBService{
  private searchUrl: string
  private genresUrl: string
  constructor(private http : Http){
  }

  searchMovie(str:string){
    this.searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query='+str+'&page=1&include_adult=false'
    return this.http.get(this.searchUrl)
    .map(res => res.json())
  }

  getGenre() {
    this.genresUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US'
    return this.http.get(this.genresUrl)
    .map(res => res.json())
  }

  }
