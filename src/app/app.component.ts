import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calorie';
  posts:any[] = [];


   onPostAdded(post:any){

     this.posts.push(post);
}


}
