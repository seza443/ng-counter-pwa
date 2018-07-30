import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    @Output() toggleSidebarEvent: EventEmitter<void> = new EventEmitter();

    /**
     * Toggle the sidebar
     */
    public toggleSidebar(): void {
        this.toggleSidebarEvent.emit();
    }
}
