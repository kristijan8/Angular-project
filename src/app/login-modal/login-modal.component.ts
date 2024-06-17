import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  standalone: true,
})
export class LoginModalComponent {
  isOpen = false;

  constructor(
    private router: Router,
    private modalRef: MdbModalRef<LoginModalComponent>,
    private loginService: LoginService
  ) {}

  close(event: Event) {
    event.preventDefault();
    this.modalRef.close();
  }
  onSubmit(event: Event) {
    event.preventDefault();
    this.modalRef.close();
    const username = (event.target as unknown as { value: string }[])?.[0]
      ?.value;
    this.loginService.hideLoginButton({ username });
    this.router.navigate(['/home']);
  }
}
