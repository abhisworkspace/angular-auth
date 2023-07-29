import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated (You can replace this logic with your own)
    const isAuthenticated = !!localStorage.getItem('token'); // Assuming 'token' is set after successful login

    if (isAuthenticated) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/login']); // Redirect to login page if not authenticated
      return false;
    }
  }
}
