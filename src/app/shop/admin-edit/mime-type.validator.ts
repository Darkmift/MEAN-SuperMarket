
/*
mime type file signatures:
https://gist.github.com/qti3e/6341245314bf3513abb080677cd1c93b
*/

import { AbstractControl } from '@angular/forms';
import { Observable, Observer, of } from 'rxjs';

export interface GenericObjResponse {
  [key: string]: any;
}

export const mimeType = (control: AbstractControl):
  Promise<GenericObjResponse> | Observable<GenericObjResponse> => {
  if (typeof (control.value) === 'string') {
    return of(null);
  }
  const file = control.value as File;
  const fileReader = new FileReader();
  const frObs = new Observable((observer: Observer<GenericObjResponse>) => {
    fileReader.addEventListener('loadend', () => {
      const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
      let header = '';
      let isValid = false;

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        header += arr[i].toString(16);
      }

      switch (header) {
        case '89504e47':
          isValid = true;
          break;
        case 'ffd8ffe0':
        case 'ffd8ffe1':
        case 'ffd8ffe2':
        case 'ffd8ffe3':
        case 'ffd8ffe8':
          isValid = true;
          break;
        default:
          isValid = false; // Or you can use the blob.type as fallback
          break;
      }

      if (isValid) {
        observer.next(null);
      } else {
        observer.next({ invalidMimeType: true });
      }
      observer.complete();

    });
    fileReader.readAsArrayBuffer(file);
  });

  return frObs;

};
