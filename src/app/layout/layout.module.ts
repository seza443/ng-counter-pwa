import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
    declarations: [
        AppLayoutComponent,
        TopbarComponent,
        SidebarComponent
    ],
    imports: [
        AngularMaterialModule
    ],
    exports: [
        AppLayoutComponent
    ],
})
export class LayoutModule {}
