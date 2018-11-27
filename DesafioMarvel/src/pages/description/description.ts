import { Hero } from './../home/home';
import { HeroServiceProvider } from './../../providers/hero-service/hero-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  id: Number = 1017100;
  data: any;
  hero: Hero;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Hero: HeroServiceProvider
    ) {
      this.data = navParams.data.data;
      console.log(this.data);
      
      
      // this.loadComics();
      
  }

  close(){
    this.navCtrl.pop();
  }

  // loadComics(){
  //   for (let i = 0; i < this.hero.comics.length; i++) {
  //     let comics = new Comics();
  //     comics.name = this.hero.comics[i].name
  //     comics.img = this.hero.comics[i].resourceURI
  //     this.comics.push(comics);

      
      
  //   }
    
  // }




}
export class Comics{
  name: string;
  img: string;
}
