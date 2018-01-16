import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  serverCreationStatus: string = 'No Server Created!';
  serverName = 'Test Server';
  constructor() { 
      this.allowNewServer = false;
      setTimeout(()=> {
          this.allowNewServer = true;
      }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
      this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
      console.log(event);
      this.serverName =  (<HTMLInputElement>event.target).value;
  }
}
