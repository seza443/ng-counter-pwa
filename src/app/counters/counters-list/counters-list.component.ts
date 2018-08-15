import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CounterI } from '../../storage/models/counter.interface';

@Component({
    selector: 'app-counters-list',
    templateUrl: 'counters-list.component.html'
})

export class CountersListComponent implements OnInit {
    @Input() counters: CounterI;
    @Output() editEvent: EventEmitter<CounterI> = new EventEmitter();
    @Output() deleteEvent: EventEmitter<CounterI> = new EventEmitter();
    @Output() hitEvent: EventEmitter<CounterI> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    public edit(counter): void {
        this.editEvent.emit(counter);
    }

    public delete(counter): void {
        this.deleteEvent.emit(counter);
    }

    public hit(counter): void {
        this.hitEvent.emit(counter);
    }
}
