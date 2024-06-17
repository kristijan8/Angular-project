import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  standalone: true,
})
export class FeedbackComponent {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  func(event: Event) {
    event.preventDefault();

    this.snackBar.open('Thanks for giving feedback!', '', {
      duration: 2000,
    });
    this.router.navigate(['/home']);
  }
}
