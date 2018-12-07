import { Component, OnInit } from '@angular/core';
import { XianshiService } from '../xianshi.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-chakan',
  templateUrl: './chakan.component.html',
  styleUrls: ['./chakan.component.css']
})
export class ChakanComponent implements OnInit {
  chakan: {};

  constructor(private xianshiService: XianshiService,
    private appcomponent: AppComponent
    ) { }

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    this.chakan = userEntity;
  }
  bianji(): void {
    this.appcomponent.cha = false;
    this.appcomponent.xian = false;
    this.appcomponent.bian = true;
  }

}
