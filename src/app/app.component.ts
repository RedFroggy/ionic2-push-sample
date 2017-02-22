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

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }

  initPush():void {


  }

  initializeApp() {
    this.platform.ready().then(() => {

      try {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        Splashscreen.hide();

        let appId = 'e13e27b8-5f40-406f-9c88-d03ce9084708';
        let senderId = '784104879538';

        OneSignal.startInit(appId, senderId);

        OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);

        OneSignal.handleNotificationReceived().subscribe(() => {
          alert("A notification has been received");
        });

        OneSignal.handleNotificationOpened().subscribe(() => {
          alert("A notification has been opened");
        });

        OneSignal.endInit();
      } catch(ex) {
        alert(ex);
      }

    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
