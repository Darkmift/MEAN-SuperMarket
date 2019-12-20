import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req).pipe(
      catchError((responseError: HttpErrorResponse) => {

        console.log('TCL: ErrorInterceptor -> intercept -> result', responseError);

        try {
        } catch (error) {
        } finally {
          let output;
          if (typeof responseError.error.message === 'string') {
            output = responseError.error.message;
          }
          if (typeof responseError.error.message === 'object') {
            output = JSON.stringify(responseError.error.message);
          }
          if (output === undefined || null) {
            output = 'Sorry something went wrong :(';
          }

          this.toastService.error('Http Error Interceptor', output, { progressBar: true });
        }

        return throwError(responseError);
      })
    );
  }
}
