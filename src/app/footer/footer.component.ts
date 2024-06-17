import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private router: Router) {}

  funcAbout(event: Event) {
    event.preventDefault();

    this.router.navigate(['/about-us']);
  }
  funcPrivacy(event: Event) {
    event.preventDefault();

    this.router.navigate(['/privacy']);
  }
  funcContact(event: Event) {
    event.preventDefault();

    this.router.navigate(['/contact']);
  }
}
