import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen, OneSignal } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();

    platform.ready().then(() => this.initPush());

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }

  initPush():void {
    let serverKey = 'AAAAtpBK9bI:APA91bF5zON2B70nTH8NgVo10B_MBR_JAaA8L6r4MaTuty3o-vjsgXmY3-JuWlSKAJoERTs6bvsgfK3CMRLAUzf3ItnD5O0Gw3GMVHvPT5ThIxaXTg51r_G4FzKcGoX_9iBZF7GkLcE0';
    let senderId = '784104879538';

    OneSignal.startInit(serverKey, senderId);
    OneSignal.setSubscription(true);
    OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);

    OneSignal.handleNotificationReceived().subscribe(() => {
      console.log("A notification has been received");
    });

    OneSignal.handleNotificationOpened().subscribe(() => {
      console.log("A notification has been opened");
    });

    OneSignal.endInit();

    OneSignal.getIds().then(data => {
      // this gives you back the new userId and pushToken associated with the device. Helpful.
      console.log("Get ids", data);
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
