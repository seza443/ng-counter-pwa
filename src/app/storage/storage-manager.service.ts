import { Injectable } from '@angular/core';
import { CounterDatabase } from './counter-database';

@Injectable()
export class StorageManagerService {
    public db: CounterDatabase = new CounterDatabase();

    constructor() {
    }
}
