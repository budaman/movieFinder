import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../services/movieDB.service'
import { Router } from '@angular/router'

import { Movies } from '../models/Movies'
import { Genres } from '../models/Genres'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchStr:string
genres: Genres[]
searchResults: Movies[]
  constructor(
  private movieDBService: MovieDBService
  ) { }

  ngOnInit() {
    this.movieDBService.getGenre()
    .subscribe(res => {
      this.genres = res.genres
      console.log(this.genres)
    })
  }
  search() {
    if(this.searchStr===""){
      return
    }
    this.movieDBService.searchMovie(this.searchStr)
    .subscribe(res => {
      this.searchResults = res.results
    })
  }

  getGenre(genre) {
    let gen = this.genres.find(item => item.id === genre)
    if(gen) {
      return gen.name
    }
  }



}
