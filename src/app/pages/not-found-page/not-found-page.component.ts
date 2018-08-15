import { Component, OnInit } from '@angular/core';
import { ROUTES_PATH } from '../../routing/app.routes';

@Component({
    selector: 'app-not-found',
    templateUrl: 'not-found-page.component.html'
})

export class NotFoundPageComponent implements OnInit {
    routes = ROUTES_PATH;

    constructor() { }

    ngOnInit() { }
}
