import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
})
export class ComponentOneComponent implements OnInit {
  componentOneData: any = [];

  constructor(private dataShareService: DataShareService) {}

  ngOnInit() {
    this.dataShareService.shareData.subscribe((response) => {
      this.componentOneData = response;
    });
  }

  submit(input) {
    console.log(input);
    let object = { name: input };
    console.log('creating an object with name', object);
    console.log('componentOneData ===>', this.componentOneData);

    this.componentOneData.push(object);

    console.log('componentOneData ===>', this.componentOneData);

    this.dataShareService.shareData.next(this.componentOneData);
  }
}
