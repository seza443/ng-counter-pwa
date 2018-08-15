import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
} from '@angular/material';

const MATERIAL_ANGULAR_COMPONENTS = [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
];

@NgModule({
    imports: [...MATERIAL_ANGULAR_COMPONENTS],
    exports: [...MATERIAL_ANGULAR_COMPONENTS],
})
export class AngularMaterialModule { }
