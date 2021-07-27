import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaybox',
  templateUrl: './displaybox.component.html',
  styleUrls: ['./displaybox.component.css']
})
export class DisplayboxComponent implements OnInit {
  @Input("items") p:any;
  posts=[{name:"food",calories:" as shown",url:"as entered"}
];
  quantity=0
  tname=''
  tcal=''
  turl=''
  ar:any[] = [];

  onfinaladd(){
    var n=this.quantity
    if(n==0 || n<0){
      window.alert("enter quantity correctly")
    }
    var post= {
      yname:this.tname,
      ycalories:this.tcal,
      yurl:this.turl,
      yq:this.quantity
    };
   this.ar.push(post);
   console.log(this.ar);



  }





//fs.writeFileSync(path.resolve(__dirname, 'student.json'), JSON.stringify(student))






  constructor() { }

  ngOnInit(): void {
  }

}
