import { HttpInterceptorFn } from '@angular/common/http';
import { SessionService } from '../services/session.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const sessionService = inject(SessionService);

  if (sessionService.isLogged) {
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${sessionService.session?.token}`),
    });
  }

  return next(req);
};
