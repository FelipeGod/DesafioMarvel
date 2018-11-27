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
  public show = true;
  public abc: any = [];

  public obj: any;
  public heroes: any;
  public ListHeroes: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public HeroSrv: HeroServiceProvider
    ) {
    this.getAllHeroes();
    this.loadAbc();
  }

  // search($event): void{
  //   if ($event.srcElement.value) {
  //     let length = $event.srcElement.value.length;
  //     let value = $event.srcElement.value;
  //     if (length > 2) {
  //       this.show = false;
  //     }else{
  //       this.show = true;
  //     }
  //   }
  // }

  searchBarCancel(){
    this.isSearchBarOpened = false;
    this.show = true;
  }
  
  getAllHeroes() {
    this.HeroSrv.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;

        for (let i = 1; i < this.heroes.length; i++) {
          let hero = new Hero();
          hero.id = this.heroes[i].id;
          hero.name = this.heroes[i].name;
          hero.photo = this.heroes[i].thumbnail.path + '.' + this.heroes[i].thumbnail.extension;
          hero.description = this.heroes[i].description;
          hero.comics = this.heroes[i].comics.items;
          hero.stories = this.heroes[i].stories.items;
          hero.series = this.heroes[i].series.items;
          hero.firstLetterId = this.getFirstLetterId(hero.name);

          this.ListHeroes.push(hero);
        }
      });
  }

  getDescription(id: Number) {
    this.HeroSrv.getDescription(id)
    .then( data => {
      this.navCtrl.push("DescriptionPage", {data: data});
    })
  }



  getFirstLetterId(name: string){
    name = name.charAt(0);
    name = name.toLowerCase();
    let string = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < string.length; i++) {
      if (name == string.charAt(i)) {
        return i;
      }
    }
    return null;
  }

  loadAbc(){
    let string = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < string.length; i++) {
      let list = new List();
      list.letter = string.charAt(i).toUpperCase();
      list.num = i;
      this.abc.push(list); 
    }
  }


  
  

}
export class Hero{
  id: Number;
  name: string;
  photo: string;
  description: string;
  comics: [any];
  stories: [any];
  series: [any];
  firstLetterId: Number;
}
export class List{
  letter: string;
  num: Number;
}