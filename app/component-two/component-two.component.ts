import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css'],
})
export class ComponentTwoComponent implements OnInit {
  componentTwoData: any = '';
  constructor(private dataShareService: DataShareService) {}

  ngOnInit() {
    this.dataShareService.shareData.subscribe((response) => {
      this.componentTwoData = response;
    });
  }

  submit(input) {
    console.log(input);
    this.dataShareService.shareData.next(input);
  }
}
