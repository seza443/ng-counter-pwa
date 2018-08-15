import { Component, OnInit } from '@angular/core';
import { CountersStorageService } from '../../storage/counters-storage.service';
import { CounterI } from '../../storage/models/counter.interface';
import { CrashReportService } from '../../crash-report.service';
import { MatDialog } from '@angular/material';
import { CreateCounterDialogComponent } from '../../counters/create-counter-dialog/create-counter-dialog.component';
import { isNullOrUndefined } from 'util';
import { EditCounterDialogComponent } from '../../counters/edit-counter-dialog/edit-counter-dialog.component';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {
    counters: CounterI[] = [];
    isLoadingCounters = false;

    constructor(
        private cr: CrashReportService,
        private countersStorage: CountersStorageService,
        private dialog: MatDialog
    ) { }

    ngOnInit() {
        this.fetchCountersList();
    }

    public createCounter(): void {
        const dialogRef = this.dialog.open(CreateCounterDialogComponent);
        dialogRef.afterClosed().subscribe((newCounter) => {
            if (!isNullOrUndefined(newCounter)) {
                this.countersStorage.create(newCounter).subscribe(
                    (createdCounter) => {
                        this.counters = [...this.counters, createdCounter];
                    },
                    (error) => {
                        this.cr.logError(error);
                    }
                );
            }
        });
    }

    public editCounter(counterToEdit): void {
        const dialogRef = this.dialog.open(EditCounterDialogComponent, {
            data: counterToEdit
        });
        dialogRef.afterClosed().subscribe((counterToUpdate) => {
            if (!isNullOrUndefined(counterToUpdate)) {
                this.countersStorage.update(counterToUpdate).subscribe(
                    (updatedCounter) => {
                        const updatedCounterId = this.counters.findIndex((c) => c.id === updatedCounter.id);
                        this.counters[updatedCounterId] = updatedCounter;
                    },
                    (error) => {
                        this.cr.logError(error);
                    }
                );
            }
        });
    }

    public deleteCounter(counterToDelete): void {
        this.countersStorage.delete(counterToDelete.id).subscribe(
            (deletedCounterId) => {
                const updatedCounterId = this.counters.findIndex((c) => c.id === deletedCounterId);
                this.counters.splice(updatedCounterId, 1);
            },
            (error) => {
                this.cr.logError(error);
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