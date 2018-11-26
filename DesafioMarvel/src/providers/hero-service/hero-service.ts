import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Md5 } from "ts-md5/dist/md5";

@Injectable()
export class HeroServiceProvider {
  data: any;

  constructor(public http: Http) {
  }

  load(): Promise<any>{
    return new Promise(resolve => {
      var timestamp = Number(new Date());
      var hash = Md5.hashStr("ebd407c102ea3f1262b8dd370cfa04d4a132a867d8b23f3429d72898aaffd1a321761b4a");
      
      this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=name&limit=20&apikey=d8b23f3429d72898aaffd1a321761b4a&hash=${hash}`)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  getDescription(): Promise<any>{
    return new Promise(resolver => {
      var timestamp = Number(new Date());
      var hash = Md5.hashStr("ebd407c102ea3f1262b8dd370cfa04d4a132a867d8b23f3429d72898aaffd1a321761b4a");

      this.http.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&orderBy=name&limit=20&apikey=d8b23f3429d72898aaffd1a321761b4a&hash=${hash}`)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolver(this.data);
      });
    });
  }

}
