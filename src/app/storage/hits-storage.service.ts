import { Injectable } from '@angular/core';
import { StorageManagerService } from './storage-manager.service';
import { Observable, observable } from 'rxjs';
import { from as fromPromise, of as observableOf } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HitI } from './models/hit.interface';

@Injectable()
export class HitsStorageService {

    constructor(private sm: StorageManagerService) {
    }

    /**
     * Create a new hit and return it.
     * @param newHit
     */
    public create(newHit: HitI): Observable<HitI> {
        return fromPromise(this.sm.db.hits.add(newHit))
            .pipe(
                mergeMap((id: number) => {
                    newHit.id = id;
                    return observableOf(newHit);
                })
            );
    }

    /**
     * Get a list of all hits
     */
    public list(): Observable<HitI[]> {
        return fromPromise(this.sm.db.hits.toArray());
    }
}
