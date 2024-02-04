import { Component } from '@angular/core';
import { Network, ConnectionStatus } from '@capacitor/network';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //npm install @capacitor/network

  networkStatus: ConnectionStatus | undefined;

  constructor() {
    if (Network) {
      Network.getStatus().then((status) => {
        this.networkStatus = status;
      })
    }

    Network.addListener("networkStatusChange", status => {
      this.networkStatus = status;
    })
  }

}
