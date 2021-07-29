import { Component, Input, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-display-total',
  templateUrl: './display-total.component.html',
  styleUrls: ['./display-total.component.css']
})


export class DisplayTotalComponent implements OnInit {

  post:any;
    t:number = 0;


  ontotal(){
    this.post = JSON.parse(localStorage.getItem('posts') || '{}');
    let ans=0

    for(var i=0;i<this.post.length;i++){
       var x=Number(this.post[i].calories)
       var y=Number(this.post[i].q)
        this.t = this.t + x*y
    }



  }

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
    if (this.eventEmitterService.subsVar==undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeFirstComponentFunction.subscribe((name:string) => {
        this.ontotal();
      });
    }
  }

}
