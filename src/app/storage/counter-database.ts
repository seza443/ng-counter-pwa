import Dexie from 'dexie';
import { CounterI } from './models/counter.interface';
import { HitI } from './models/hit.interface';

const DATABASE_NAME = 'CounterDatabase';

export class CounterDatabase extends Dexie {
    public counters!: Dexie.Table<CounterI, number>;
    public hits!: Dexie.Table<HitI, number>;

    public constructor() {
        super(DATABASE_NAME);

        this.version(1).stores({
            counters: '++id,name,isFavourite,lastHitDate,totalHits',
            hits: '++id,counterId,hitDate,label',
        });
    }
}
