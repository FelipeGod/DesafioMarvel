import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Md5 } from "ts-md5/dist/md5";
import { LoadingController } from 'ionic-angular';

@Injectable()
export class HeroServiceProvider {
  data: any;

  constructor(
    public http: Http,
    public LoadCtrl: LoadingController,
    ) {
  }

  load(): Promise<any>{
    let loading = this.LoadCtrl.create({
      content: 'Loading...',
      spinner: 'ios'
    });
    loading.present();

    return new Promise(resolve => {
      var timestamp = Number(new Date());
      var hash = Md5.hashStr(`${timestamp}85e08fcd50180a3d3dfbc9057aba9756a23cbaae6d61db6a1cba0990492178ca39c4bcfc`);
          
      this.http.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${timestamp}&apikey=6d61db6a1cba0990492178ca39c4bcfc&hash=${hash}`)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
        loading.dismiss();
      });
    });
  }

  getDescription(id: Number){
    let loading = this.LoadCtrl.create({
      content: 'Loading...',
      spinner: 'dots'
    });
    loading.present();
    
    return new Promise(resolver => {
      var timestamp = Number(new Date());
      var hash = Md5.hashStr(`${timestamp}85e08fcd50180a3d3dfbc9057aba9756a23cbaae6d61db6a1cba0990492178ca39c4bcfc`);

      this.http.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&orderBy=name&limit=20&apikey=6d61db6a1cba0990492178ca39c4bcfc&hash=${hash}`)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolver(this.data);
        loading.dismiss();
      });
    });
  }

}
