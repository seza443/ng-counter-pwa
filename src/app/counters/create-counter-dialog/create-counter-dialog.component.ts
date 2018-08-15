import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CounterI } from '../../storage/models/counter.interface';

@Component({
    templateUrl: 'create-counter-dialog.component.html'
})

export class CreateCounterDialogComponent implements OnInit {
    newCounter: CounterI;

    constructor(
        private dialogRef: MatDialogRef<CreateCounterDialogComponent>
    ) { }

    ngOnInit() {
        this.newCounter = {
            isFavourite: false,
            lastHitDate: null,
            name: '',
            totalHits: 0
        };
    }

    public cancel(): void {
        this.dialogRef.close();
    }
}
