import { Component } from '@angular/core'; 
@Component({
    selector: 'app-success-alert',
    template: `
        <div class="alert alert-success">
            Success message goes here...
        </div>
    `,
    styles: [`
        * {
            color: green;
        }
    `]
})
export class SuccessAlertComponent {
    
}