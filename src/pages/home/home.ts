import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import 'rxjs/add/operator/map';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';

const yt = "http://www.youtube.com/embed/"



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

posts : any;
videos : any;
search = this.search;

  constructor(public navCtrl: NavController, public http: Http, private sanitizer: DomSanitizer) {


}
	postVideo() {

	this.http.get(`${BASE_URL}?q=${this.search}&part=snippet&key=${API_TOKEN}`).map(res => res.json()).subscribe(data => {
        this.posts = this.sanitizer.bypassSecurityTrustResourceUrl(`${yt}${data.items[1].id.videoId}`);
        console.log(this.posts);
    });

  this.http.get(`${BASE_URL}?q=${this.search}&part=snippet&key=${API_TOKEN}`).map(res => res.json()).subscribe(data => {
        this.videos = this.sanitizer.bypassSecurityTrustResourceUrl(`${yt}${data.items[2].id.videoId}`);
        console.log(this.videos);
    });
	
      		

  }

}
