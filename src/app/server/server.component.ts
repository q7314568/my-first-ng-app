import { Component } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online{
      color:white;
    }
  `]
})

export class ServerComponent {
  // tslint:disable-next-line: no-inferrable-types
  serverId: number = 10;
  // tslint:disable-next-line: no-inferrable-types
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  // tslint:disable-next-line: typedef
  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
