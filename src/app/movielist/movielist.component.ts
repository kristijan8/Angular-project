import { Component, OnInit } from '@angular/core';
import { MOVIES } from './db-data';
import { Movie } from './interface';

@Component({
  selector: 'app-movie-card',
  standalone: false,
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css',
})
export class MovielistComponent implements OnInit {
  movies: Movie[] = MOVIES;
  displayMovies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {
    this.displayMovies = [...this.movies];
  }
  sortMoviesByRating(): void {
    this.displayMovies.sort((a, b) => b.rating - a.rating);
  }
}
