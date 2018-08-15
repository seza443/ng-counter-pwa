import { Injectable } from '@angular/core';
import { StorageManagerService } from './storage-manager.service';
import { CounterI } from './models/counter.interface';
import { Observable, observable } from 'rxjs';
import { from as fromPromise, of as observableOf } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class CountersStorageService {

    constructor(private sm: StorageManagerService) {
    }

    /**
     * Create a new counter and return its ID.
     * @param newCounter
     */
    public create(newCounter: CounterI): Observable<CounterI> {
        return fromPromise(this.sm.db.counters.add(newCounter))
            .pipe(
                mergeMap((id: number) => {
                    newCounter.id = id;
                    return observableOf(newCounter);
                })
            );
    }

    public list(): Observable<CounterI[]> {
        return fromPromise(this.sm.db.counters.toArray());
    }
}
