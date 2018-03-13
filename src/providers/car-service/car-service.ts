import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CarServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarServiceProvider {

  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  constructor(private db:AngularFireDatabase) {
        //console.log('Hello CarServiceProvider Provider');

    this.itemRef = db.object('car');
    this.item = this.itemRef.valueChanges();

  }
  
  getAll(){
    return this.db.list("car").valueChanges();
  }

  save(id:string, make:string, brand:string, color:string) {
    return this.db.object('car/' + id).set({ 
      id: id,
      brand: brand,
      make: make,
      color: color
     });
  }

  update(id:string, make:string, brand:string, color:string) {
    this.db.object('car/'+id).update({ 
      id: id,
      brand: brand,
      make: make,
      color: color 
    });
  }

  delete(id:string) {
    this.db.object('car/' + id).remove();
  }

}
