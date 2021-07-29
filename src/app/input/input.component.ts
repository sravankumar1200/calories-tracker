import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{
  enteredname=''
  enteredcalories=0
  enteredurl=''
  quantity=0
  posts:any[] = [];
  po:any[]=[]
  t:number = 0;
  namexists(x:string){
      var k  = JSON.parse(localStorage.getItem('posts') || '{}');

    for(var i=0;i<k.length;i++){
      if(k[i].name ===x){
        return true;
      }
   }
   return false;
    }
  onAdd(){
    if(this.enteredcalories<=0 || this.enteredname.length==0|| this.enteredurl.length==0|| this.quantity<=0){
      window .alert("check details");
      return;
    }
    if(this.namexists(this.enteredname)){
      alert("Name already exists");
      return;
    }
    var post= {
      name:this.enteredname,
      calories:this.enteredcalories,
      url:this.enteredurl,
      q:this.quantity

    };
    this.posts.push(post);
    localStorage.setItem("posts",JSON.stringify(this.posts))
    this.eventEmitterService.onFirstComponentButtonClick();

  }




  constructor(private eventEmitterService:EventEmitterService) { }


  ngOnInit(): void {
  }




}
