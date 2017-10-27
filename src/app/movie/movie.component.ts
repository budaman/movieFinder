import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../services/movieDB.service'
import { ActivatedRoute, Router } from '@angular/router'


import { Movies } from '../models/Movies'
import { Genres } from '../models/Genres'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id:string
  movie: Movies[]
  genres: Genres[]
  constructor(
    private movieDBService: MovieDBService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieDBService.getGenre()
    .subscribe(res => {
      this.genres = res.genres
      console.log(this.genres)
    })
    this.route.params
    .map(params => params['id'])
    .subscribe((id)=> {
      this.movieDBService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie
        console.log(this.movie)
      })
    })
  }

  getGenre(genre) {
    let gen = this.genres.find(item => item.id === genre)
    if(gen) {
      return gen.name
    }
  }

}
