import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()

export class MovieDBService{
  private searchUrl: string
  private genresUrl: string
  private movieUrl: string
  private api_key: string = 'cab2afe8b43cf5386e374c47aeef4fca'
  constructor(private http : Http){
  }

  searchMovie(str:string){
    this.searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key='+this.api_key+'&language=en-US&query='+str+'&page=1&include_adult=false'
    return this.http.get(this.searchUrl)
    .map(res => res.json())
  }

  getMovie(id:number){
    this.movieUrl = 'https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.api_key
    return this.http.get(this.movieUrl)
    .map(res => res.json())
  }

  getGenre() {
    this.genresUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+this.api_key+'&language=en-US'
    return this.http.get(this.genresUrl)
    .map(res => res.json())
  }



  }
