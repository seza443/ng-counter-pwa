import { NgModule } from '@angular/core';
import { StorageManagerService } from './storage-manager.service';
import { CountersStorageService } from './counters-storage.service';

@NgModule({
    providers: [
        StorageManagerService,
        CountersStorageService,
    ]
})
export class StorageModule { }
