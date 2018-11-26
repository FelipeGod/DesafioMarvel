import { HeroServiceProvider } from './../../providers/hero-service/hero-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public isSearchBarOpened = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public HeroSrv: HeroServiceProvider
    ) {
  }

  search(): void{
    console.log('oi');
    
  }

}
