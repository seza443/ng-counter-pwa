import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountersListComponent } from './counters-list/counters-list.component';
import { CreateCounterDialogComponent } from './create-counter-dialog/create-counter-dialog.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { EditCounterDialogComponent } from './edit-counter-dialog/edit-counter-dialog.component';

const COUNTERS_COMPONENTS = [
    CountersListComponent,
];

const DIALOG_COMPONENTS = [
    CreateCounterDialogComponent,
    EditCounterDialogComponent,
];

@NgModule({
    declarations: [
        ...COUNTERS_COMPONENTS,
        ...DIALOG_COMPONENTS,
    ], exports: [
        ...COUNTERS_COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        AngularMaterialModule,
    ],
    entryComponents: [
        ...DIALOG_COMPONENTS
    ]
})
export class CountersModule { }
