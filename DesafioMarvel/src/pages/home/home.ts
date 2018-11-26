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

  public obj: any;
  public heroes: any;
  public ListHeroes: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public HeroSrv: HeroServiceProvider
    ) {
    this.getAllHeroes();
  }

  search(): void{
    console.log('oi');
    
  }
  
  getAllHeroes() {
    this.HeroSrv.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;

        // for (let i = 0; i < this.heroes.results.length; i++) {

        // }
        let hero = new Hero();
        hero.id = this.heroes[1].id;
        hero.name = this.heroes[1].name;
        hero.photo = this.heroes[1].thumbnail.path + '.' + this.heroes[1].thumbnail.extension;
        hero.description = this.heroes[1].description;
        hero.comics = this.heroes[1].comics.items;
        hero.stories = this.heroes[1].stories.items;
        hero.series = this.heroes[1].series.items;
        hero.firstL = this.getFirstLetter(hero.name);

        console.log(this.heroes[1]);
        console.log(hero);
        
        
      });
  }

  getDescription(id: number) {
    console.log(id);
    this.navCtrl.push("DescriptionPage", {
      id: id
    })
  }

  getFirstLetter(name: string): string{
    name = name.charAt(0);
    name = name.toLowerCase();
    return name;
  }
  

}
export class Hero{
  id: Number;
  name: string;
  photo: string;
  description: string;
  comics: [];
  stories: [];
  series: [];
  firstL: string;
}
