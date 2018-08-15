import { Component, OnInit, Input } from '@angular/core';
import { CounterI } from '../../storage/models/counter.interface';

@Component({
    selector: 'app-counters-list',
    templateUrl: 'counters-list.component.html'
})

export class CountersListComponent implements OnInit {
    @Input() counters: CounterI;

    constructor() { }

    ngOnInit() { }
}
