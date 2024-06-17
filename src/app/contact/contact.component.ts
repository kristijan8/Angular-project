import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  func(event: Event) {
    event.preventDefault();
    this.snackBar.open('Thanks for contacting us!', '', {
      duration: 2000,
    });

    this.router.navigate(['/home']);
  }
}
