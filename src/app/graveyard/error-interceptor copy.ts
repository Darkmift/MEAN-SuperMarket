// import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';
// import { Injectable, TemplateRef } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ErrorModalComponent } from './error-modal/error-modal.component';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   private modalRef: TemplateRef<any>;
//   constructor(private modalService: NgbModal) { }
//   intercept(req: HttpRequest<any>, next: HttpHandler) {

//     return next.handle(req).pipe(
//       catchError((responseError: HttpErrorResponse) => {

//         console.log('TCL: ErrorInterceptor -> intercept -> result', responseError);

//         try {
//         } catch (error) {
//         } finally {
//           let output;
//           if (typeof responseError.error.message === 'string') {
//             output = responseError.error.message;
//           }
//           if (typeof responseError.error.message === 'object') {
//             output = JSON.stringify(responseError.error.message);
//           }
//           if (output === undefined || null) {
//             output = 'Sorry something went wrong :(';
//           }
//           const modalRef = this.modalService.open(ErrorModalComponent,
//             { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', windowClass: 'newUserModalClass' });
//           modalRef.componentInstance.content = output;
//         }

//         return throwError(responseError);
//       })
//     );
//   }
// }
