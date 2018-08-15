import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { AngularMaterialModule } from '../angular-material.module';

const DUMMY_COMPONENTS = [
    SpinnerComponent,
];

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
    ],
    exports: [
        ...DUMMY_COMPONENTS
    ],
    declarations: [
        ...DUMMY_COMPONENTS
    ]
})
export class DummyModule { }
