import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css']
})
export class ComponentThreeComponent implements OnInit {
  componentThreeData:any =""
  constructor(private dataShareService: DataShareService) {}

  ngOnInit() {
    this.dataShareService.shareData.subscribe((response) => {
      this.componentThreeData = response;
    });
  }


  
  submit(input) {
    console.log(input);
    this.dataShareService.shareData.next(input);
  }

}