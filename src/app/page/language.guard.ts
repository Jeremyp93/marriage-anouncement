import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const languageGuard: CanActivateFn = (route, _) => {
  const router = inject(Router);

  const languageCode = route.paramMap.get('languageCode') ?? 'fr';
    
  if (languageCode.toLowerCase() !== 'fr' && languageCode.toLowerCase() !== 'nl') {
    return router.createUrlTree(['/fr']);
  }

  return true;
};
