import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  enteredname=''
  enteredcalories=''
  enteredurl=''
  posts:any[] = [];
  onAdd(){
    var post= {
      name:this.enteredname,
      calories:this.enteredcalories,
      url:this.enteredurl
    };
    this.posts.push(post);



  }


  constructor() { }

  ngOnInit(): void {
  }

}
