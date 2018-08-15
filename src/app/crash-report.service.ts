import { Injectable } from '@angular/core';

@Injectable()
export class CrashReportService {
    constructor() { }

    public logError(error: any): void {
        console.error('Error:', error);
    }
}
