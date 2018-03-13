import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { CarServiceProvider } from '../providers/car-service/car-service';
import { DetailPage } from '../pages/detail/detail';
import { EditPage } from '../pages/edit/edit';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCU7JkDREc3Mhlu19lzcpDs1YGqttOEvH8",
  authDomain: "c11mycrud.firebaseapp.com",
  databaseURL: "https://c11mycrud.firebaseio.com",
  projectId: "c11mycrud",
  storageBucket: "c11mycrud.appspot.com",
  messagingSenderId: "414421831897"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarServiceProvider
  ]
})
export class AppModule {}
