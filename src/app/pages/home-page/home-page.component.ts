import { Component, OnInit } from '@angular/core';
import { CountersStorageService } from '../../storage/counters-storage.service';
import { CounterI } from '../../storage/models/counter.interface';
import { CrashReportService } from '../../crash-report.service';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {
    counters: CounterI[] = [];
    isLoadingCounters = false;

    constructor(
        private cr: CrashReportService,
        private countersStorage: CountersStorageService) { }

    ngOnInit() {
        this.fetchCountersList();
    }

    public createCounter(): void {
        const newCounter: CounterI = {
            isFavourite: false,
            name: 'Hello counter',
            totalHits: 0
        };
        this.countersStorage.create(newCounter).subscribe(
            (createdCounter) => {
                this.counters = [...this.counters, createdCounter];
            }
        );
    }

    private fetchCountersList(): void {
        if (!this.isLoadingCounters) {
            this.isLoadingCounters = true;
            this.countersStorage.list().subscribe(
                (counters) => {
                    this.counters = counters;
                    this.isLoadingCounters = false;
                },
                (error) => {
                    this.cr.logError(error);
                }
            );
        }
    }
}
