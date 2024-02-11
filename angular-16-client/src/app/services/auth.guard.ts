// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    // Vérifiez si l'utilisateur est authentifié
    if (this.authService.isAuthenticated()) {
      return true; // L'utilisateur est authentifié, permet l'accès à la route.
    }

    // Si l'utilisateur n'est pas authentifié, vérifiez si la route est la page d'inscription
    if (state.url.includes('/signup')) {
      return true; // Permet l'accès à la page d'inscription sans authentification.
    }

    // Redirige l'utilisateur vers la page de connexion pour les autres routes non autorisées.
    this.router.navigate(['/signin']);
    return false;
  }
}
