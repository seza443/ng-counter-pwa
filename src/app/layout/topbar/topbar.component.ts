import { Component, Output, EventEmitter } from '@angular/core';
import { ROUTES_PATH } from '../../routing/app.routes';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    @Output() toggleSidebarEvent: EventEmitter<void> = new EventEmitter();
    routes = ROUTES_PATH;

    /**
     * Toggle the sidebar
     */
    public toggleSidebar(): void {
        this.toggleSidebarEvent.emit();
    }
}
