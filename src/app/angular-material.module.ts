import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
} from '@angular/material';

const MATERIAL_ANGULAR_COMPONENTS = [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
];

@NgModule({
    imports: [...MATERIAL_ANGULAR_COMPONENTS],
    exports: [...MATERIAL_ANGULAR_COMPONENTS],
})
export class AngularMaterialModule { }
