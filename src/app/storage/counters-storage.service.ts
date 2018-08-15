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
        return fromPromise(this.sm.db.counters.update(counter.id, {
            name: counter.name,
            isFavourite: counter.isFavourite,
            lastHitDate: counter.lastHitDate,
            totalHits: counter.totalHits
        }))
            .pipe(
                mergeMap((numberOfUpdatedObjects: number) => {
                    if (numberOfUpdatedObjects === 1) {
                        return observableOf(counter);
                    } else {
                        throw Error(`Counter ${counter.id} not found or nothing changed`);
                    }
                })
            );
    }

    public setFavourite(id: number, isFavourite: boolean): Observable<boolean> {
        return fromPromise(this.sm.db.counters.update(id, { isFavourite: isFavourite }))
            .pipe(
                mergeMap((numberOfUpdatedObjects: number) => {
                    if (numberOfUpdatedObjects === 1) {
                        return observableOf(isFavourite);
                    } else {
                        throw Error(`Counter ${id} not found or nothing changed`);
                    }
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
