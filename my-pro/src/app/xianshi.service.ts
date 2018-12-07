import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XianshiService {
  private inputData: object;

  constructor() { }
  setInputValue(obj) {
    this.inputData = obj;
    console.log(this.inputData);
  }

  getInputValue() {
    return this.inputData;
  }
}
