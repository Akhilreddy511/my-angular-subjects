import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DataShareService {
  // shareData = new Subject();
  shareData = new BehaviorSubject([{name:'akhil'},{name:'vinay'}]);

  constructor() {}
}
