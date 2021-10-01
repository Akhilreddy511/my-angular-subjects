import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
})
export class ComponentOneComponent implements OnInit {
  componentOneData: any = '';

  constructor(private dataShareService: DataShareService) {}

  ngOnInit() {
    this.dataShareService.shareData.subscribe((response) => {
      this.componentOneData = response;
    });
  }

  submit(input) {
    console.log(input);
    this.dataShareService.shareData.next(input);
  }
}
