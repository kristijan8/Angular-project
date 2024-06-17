import { Component,  OnInit } from '@angular/core';
import { MOVIES } from './db-data';
import { Movie } from './interface';

@Component({
  selector: 'app-movie-card',
  standalone: false,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
  movies: Movie[] = MOVIES;
  currentID = 0;
  displayMovies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {
    this.updateDisplayMovies();
    setInterval(() => {
      this.currentID = (this.currentID + 1) % this.movies.length;
      this.updateDisplayMovies();
    }, 5000);
  }

  updateDisplayMovies(): void {
    let endIndex = this.currentID + 3;
    if (endIndex > this.movies.length) {
      let overflow = endIndex - this.movies.length;
      this.displayMovies = [
        ...this.movies.slice(this.currentID),
        ...this.movies.slice(0, overflow),
      ];
    } else {
      this.displayMovies = this.movies.slice(this.currentID, endIndex);
    }
  }
}
