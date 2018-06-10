import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  showHide: boolean;
  counter = 0;
  showLog = false;
  
  showHideToggle() {
    this.showHide = !this.showHide;
    console.log(this.showHide);

    this.showLog = true;
    // this.counter ++;
    console.log(this.counter ++);

  }
  

constructor() { 
}

ngOnInit() {
}

}
