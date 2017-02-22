# Ionic 2 Push Example

This project shows how to push data between an ionic 2 mobile App and the OneSignal platform for Android.

## Installation

### Google Server
You first need to create a firease account and generate a SERVER_KEY and a SENDER_ID.
Then you need to add these info ine OneSignal as detailed [here](https://documentation.onesignal.com/docs/generate-a-google-server-api-key)

### OneSignal
To configure your OneSignal app you can read this tutorial (step 8 is the most interesting):
http://www.codingandclimbing.co.uk/blog/ionic-2-setup-push-notifications-for-android-with-onesignal-17

### Android Studio
- Install the Android Studio [here](https://developer.android.com/studio/index.html)
- This will install the studio and also the sdk located by default in ~/Android/Sdk
- Add the ANDROID_HOME variable
- Of course, you will also need to install java and set the JAVA_HOME propety
```
export ANDROID_HOME="~/Android/Sdk"
```

### Android SDK
You need then to install the sdk that is matches your phone's android version to be able to deploy the application
Run :
```
~/Android/Sdk/tools/android sdk
```
A window will open, choose the proper SDK and install the dependencies

### Ionic
You will need to install the ionic  and cordove cli:
```
sudo npm install -g ionic
sudo npm install -g cordova
```

## Sources
The relevant code about push is in the file: src/app/app.component.ts

## Build
Add the android platform 
```
ionic platform add android
```

## Run
- Plug in your phone to your computer via USB
- You may need to install Google USB Driver if you're on [Windows](https://developer.android.com/studio/run/win-usb.html)
```
ionic run android
```

## The application should

