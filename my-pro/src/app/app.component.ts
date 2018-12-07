import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '个人信息';
  xian = false;
  cha = false;
  bian = false;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    if (userEntity == null) {
      this.xian = true;
      this.cha = false;
    } else {
      this.cha = true;
      this.xian = false;
    }
  }

}
