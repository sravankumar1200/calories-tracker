import { Component, Input, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-displaybox',
  templateUrl: './displaybox.component.html',
  styleUrls: ['./displaybox.component.css']
})
export class DisplayboxComponent implements OnInit {

  @Input("items") p:any;
  //@Input("items")s:any;
  q=[];

  onremove(name:string){
    for(var i=0;i<this.p.length;i++){
      var cart_items = JSON.parse(localStorage["posts"]);
      for (i=0;i<cart_items.length;i++)
     if (cart_items[i].name === name) cart_items.splice(i,1);
    }
   localStorage["posts"] = JSON.stringify(cart_items);
   this.eventEmitterService.onFirstComponentButtonClick();



  }

  constructor(private eventEmitterService:EventEmitterService) { }

  ngOnInit(): void {
  }

}
