import { Injectable } from '@angular/core';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
 HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalSessionExpiredComponent } from '../components/modal-session-expired/modal-session-expired.component';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';
import { NotificationService } from '../notifications/notification.service';

@Injectable()

export class AuthHttpInterceptorService implements HttpInterceptor {
  constructor(
    private route: Router,
    public dialog: MatDialog,
    private errorService: ErrorService,
    private auth: Auth,
    private $notification: NotificationService
    ) {}
 intercept(
  req: HttpRequest<any>,
  next: HttpHandler,
 ): Observable<HttpEvent<any>> {
    let accessToken;
    this.$notification.firstTokens.subscribe((res) => {
        accessToken = res;
    });
    const dupReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + accessToken),
 });
 return next.handle(dupReq).pipe(catchError((error, caught) => {
  if (error instanceof HttpErrorResponse) {
    this.errorService.changeGoal(true);
    if (error.status === 401 || error.status === 403) {
      this.openSessionExpired();
      if (this.auth.getAuth()) {
        const authData = this.auth.getAuth();
      }
    }
      return throwError(error);
    }
  }));
}

 openSessionExpired(): void {
  const mobWidth = (window.screen.width);
  let width = '40vw';
  if (mobWidth < 768) {
    width = '90vw';
  }
  this.dialog.closeAll();
  const dialogRef = this.dialog.open(ModalSessionExpiredComponent, {
    width: width,
    disableClose: true
  });
  dialogRef.afterClosed().subscribe(result => {
    this.route.navigate(['/']).then(() => { window.location.href = environment.urlLogin; });
  });
}
}
