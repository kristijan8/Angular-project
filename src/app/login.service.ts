import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _showLoginButton = new BehaviorSubject<boolean>(true);
  showLoginButton$ = this._showLoginButton.asObservable();

  private _username = new BehaviorSubject<string | null>(null);
  username$ = this._username.asObservable();

  hideLoginButton({ username }: { username: string }) {
    this._showLoginButton.next(false);
    username && this._username.next(username);
  }
}
