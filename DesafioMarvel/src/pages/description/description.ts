import { HeroServiceProvider } from './../../providers/hero-service/hero-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  data: any;
  hero: Dados ;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public HeroSrv: HeroServiceProvider
    ) {
      this.data = navParams.data.data.data.results[0];
      this.loadDados();
      
  }

  close(){
    this.navCtrl.pop();
  }
  
  loadDados(){
    let hero = new Dados();
    let list = this.data.comics.items;
    
    let listComics = new Array();
    
    
    hero.id = this.data.id;
    hero.name = this.data.name;
    hero.img = this.data.thumbnail.path + '.' + this.data.thumbnail.extension;
    hero.description = this.data.description;

    for (let i = 0; i < list.length; i++) {
      let hq = new HQ();
      let comic = list[i];
      
      hq.name = comic.name;

      this.HeroSrv.getImg(comic.resourceURI)
      .then( data => {
        let newData = data.data.results[0].thumbnail;
        hq.img = newData.path + '.' + newData.extension;
      });
      listComics.push(hq);
    }
    hero.comics = listComics
    this.hero = hero;
  }




}
export class Dados{
  id: Number;
  name: string;
  img: string;
  description: string;
  comics: any[];
  stories: any[];
  series: any[];
  events: any[];
}
export class HQ{
  name: string;
  img: string;
}
