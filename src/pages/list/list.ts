import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarServiceProvider } from '../../providers/car-service/car-service';
import { DetailPage } from '../detail/detail';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private carService: CarServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    console.log("building list page");
  }

  ionViewDidLoad(){
    console.log("loaded list page");
    this.carService.getAll().subscribe((respsone)=>{
      console.log("Got this data", respsone);
      this.items = respsone;
    },(error)=>{
      console.log("Couldn't get data", error);
    });
  }

  itemTapped(event, item) {
    /* That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });*/
    console.log("tapped item", item);
    this.navCtrl.push(DetailPage, item);
  }

  edit(item:any){
    this.navCtrl.push(EditPage, item);
  }

  remove(item:any){
    this.carService.delete(item.id);
  }
}
