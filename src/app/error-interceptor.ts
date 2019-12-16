import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from './error-modal/error-modal.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private modalRef: TemplateRef<any>;
  constructor(private modalService: NgbModal) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        console.log('TCL: ErrorInterceptor -> intercept -> result', error);
        try {
        } catch (error) {
        } finally {
          const modalRef = this.modalService.open(ErrorModalComponent,
            { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', windowClass: 'newUserModalClass' });
          modalRef.componentInstance.content = error.error.message;
        }

        return throwError(error);
      })
    );
  }
}
