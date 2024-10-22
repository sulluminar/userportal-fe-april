import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  const authStatus = inject(AuthService);
  const router = inject(Router)
  if (authStatus.isUserLogged()) {
    return true;
  }
  else {
    alert("please Login");
    router.navigateByUrl("")
    return false;
  }
};
