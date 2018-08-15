import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CounterI } from '../../storage/models/counter.interface';
import { Inject } from '@angular/core';

@Component({
    templateUrl: 'edit-counter-dialog.component.html'
})

export class EditCounterDialogComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<EditCounterDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public counter: CounterI
    ) { }

    ngOnInit() { }

    public cancel(): void {
        this.dialogRef.close();
    }
}
