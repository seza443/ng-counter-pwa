import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class StartupService {

  constructor() {
  }

  /**
   * Method that run on application startup
   * @return {Promise<void>}
   */
  appStartup(): Promise<any> {
    return new Observable((observer) => {
      // Dummy delay to show the loading screen.
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 300);
    }).toPromise();
  }
}
