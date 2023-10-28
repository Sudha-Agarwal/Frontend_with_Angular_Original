import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }

  handleCustomErrorEvent(errorEvent: ErrorEvent): void {
    console.error('An error occurred:', errorEvent);

    // You can perform actions or logic based on the error event details
    if (errorEvent.error instanceof Error) {
      // Handle errors of type Error
      console.error('A regular JavaScript Error occurred:', errorEvent.error);
    } else if (errorEvent.error instanceof ProgressEvent) {
      // Handle errors of type ProgressEvent
      console.error('A ProgressEvent occurred:', errorEvent.error);
    } else {
      // Handle other types of errors
      console.error('An error occurred:', errorEvent.error);
    }
  }
}
