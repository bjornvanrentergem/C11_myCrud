import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarServiceProvider } from '../../providers/car-service/car-service';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private carService: CarServiceProvider) {
    console.log("Navigated to with params", navParams);
    this.item = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

  save(){
    this.carService.save(this.item.id, this.item.brand, this.item.make, this.item.color).then((response)=>{
      console.log("saved item");
      //TODO: present toast message to user
      this.navCtrl.pop();
    }).catch((error)=>{
      console.log("Couldn't item, got error", error);
      //TODO: present toast message to user
    });
  }

}
