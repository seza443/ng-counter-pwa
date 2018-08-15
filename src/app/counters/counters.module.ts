import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountersListComponent } from './counters-list/counters-list.component';

const COUNTERS_COMPONENTS = [
    CountersListComponent,
];

@NgModule({
    declarations: [
        ...COUNTERS_COMPONENTS
    ], exports: [
        ...COUNTERS_COMPONENTS
    ],
    imports: [
        CommonModule,
    ]
})
export class CountersModule { }
