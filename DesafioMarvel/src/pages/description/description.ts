import { Hero } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  hero: Hero;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      this.hero = navParams.data.id;
  }

  close(){
    this.navCtrl.pop();
  }


}
