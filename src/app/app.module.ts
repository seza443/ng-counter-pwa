import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StartupService } from './startup.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: (startupService: StartupService) => function () {
        return startupService.appStartup();
      },
      deps: [StartupService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
