import { NgModule } from '@angular/core';
import { StorageManagerService } from './storage-manager.service';
import { CountersStorageService } from './counters-storage.service';
import { HitsStorageService } from './hits-storage.service';

@NgModule({
    providers: [
        StorageManagerService,
        CountersStorageService,
        HitsStorageService,
    ]
})
export class StorageModule { }
