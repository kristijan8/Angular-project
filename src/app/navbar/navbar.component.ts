import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MdbModalService],
  imports: [CommonModule],
  standalone: true,
})
export class NavbarComponent implements OnInit, OnDestroy {
  showLoginButton$ = this.loginService.showLoginButton$;
  username$ = this.loginService.username$;

  constructor(
    private modalService: MdbModalService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  openLoginModal() {
    this.modalService.open(LoginModalComponent);
    // this.modalRef = this.modalService.open(LoginModalComponent);
  }
  funcFdb(event: Event) {
    event.preventDefault();

    this.router.navigate(['/feedback']);
  }
  funcMvs(event: Event) {
    event.preventDefault();

    this.router.navigate(['/movies']);
  }
  funcHome(event: Event) {
    event.preventDefault();

    this.router.navigate(['/home']);
  }
}
