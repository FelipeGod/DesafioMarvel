import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public isSearchBarOpened = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  search(): void{
    console.log('oi');
    
  }

}
