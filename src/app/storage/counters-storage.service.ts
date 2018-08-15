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

    /**
     * Get a list of all counters
     */
    public list(): Observable<CounterI[]> {
        return fromPromise(this.sm.db.counters.toArray());
    }

    public update(counter: CounterI): Observable<CounterI> {
        return fromPromise(this.sm.db.counters.put(counter, counter.id))
            .pipe(
                mergeMap((id: number) => {
                    return observableOf(counter);
                })
            );
    }

    public setFavourite(id: number, isFavourite: boolean): Observable<boolean> {
        return fromPromise(this.sm.db.counters.update(id, { isFavourite: isFavourite }))
            .pipe(
                mergeMap((_id: number) => {
                    return observableOf(isFavourite);
                })
            );
    }

    /**
     * Delete the counter from its ID
     * @param counterId
     */
    public delete(counterId: number): Observable<number> {
        return fromPromise(this.sm.db.counters.delete(counterId))
            .pipe(
                mergeMap((id: number) => {
                    return observableOf(counterId);
                })
            );
    }
}
