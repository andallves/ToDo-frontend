import { inject } from '@angular/core';
import { UserService } from './../../shared/services/user.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isLoggedIn()) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
