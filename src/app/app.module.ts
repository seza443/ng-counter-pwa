import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { StorageModule } from './storage/storage.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { CountersModule } from './counters/counters.module';
import { CrashReportService } from './crash-report.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    AngularMaterialModule,
    LayoutModule,
    PagesModule,
    StorageModule,
  ],
  providers: [
    CrashReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
