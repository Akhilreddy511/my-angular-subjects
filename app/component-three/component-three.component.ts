import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css'],
})
export class ComponentThreeComponent implements OnInit {
  componentThreeData: any = [];
  constructor(private dataShareService: DataShareService) {}

  ngOnInit() {
    this.dataShareService.shareData.subscribe((response) => {
      this.componentThreeData = response;
    });
  }

  submit(input) {
    console.log(input);
    let object = { name: input };
    console.log('creating an object with name', object);
    console.log('componentThreeData ===>', this.componentThreeData);

    this.componentThreeData.push(object);

    console.log('componentThreeData ===>', this.componentThreeData);

    this.dataShareService.shareData.next(this.componentThreeData);
  }
}
