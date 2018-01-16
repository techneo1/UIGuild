import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: orange;
    }

    .white-text {
        color: white;
    }
  `]
})
export class AppComponent {
    title = 'app';
    username = '';
    showDetails = false;
    logMessages = [];

    onToggleDisplyDetails(event){
        console.log(event);
        this.showDetails = !this.showDetails;
        this.logMessages.push(event.timeStamp);
    }
}
