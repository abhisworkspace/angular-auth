import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated (You can replace this logic with your own)
    const isAuthenticated = !!localStorage.getItem('token'); // Assuming 'token' is set after successful login

    if (isAuthenticated) {
      this.router.navigate(['/dashboard']); // Redirect to dashboard if already logged in
      return false;
    }

    return true; // Allow access to the login page
  }
}
