import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CommonModule } from '@angular/common';
import { CountersModule } from '../counters/counters.module';
import { DummyModule } from '../dummy/dummy.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';

const PAGES = [
    HomePageComponent,
    NotFoundPageComponent
];

@NgModule({
    declarations: [
        ...PAGES
    ],
    exports: [
        ...PAGES
    ],
    imports: [
        CommonModule,
        CountersModule,
        DummyModule,
        RouterModule,
        AngularMaterialModule
    ]
})
export class PagesModule { }
