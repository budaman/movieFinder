import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../services/movieDB.service'
import { ActivatedRoute, Params, Router } from '@angular/router'


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

}
