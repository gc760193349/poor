import { Component, OnInit } from '@angular/core';
import { XianshiService } from '../xianshi.service';

@Component({
  selector: 'app-bianji',
  templateUrl: './bianji.component.html',
  styleUrls: ['./bianji.component.css']
})

export class BianjiComponent implements OnInit {
  data = {};

  constructor(private xianshiSerivce: XianshiService) { }

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    const userEntity = JSON.parse(userJsonStr);
    this.data = userEntity;
    console.log(this.data);
  }
  save(name: string, sex: string, age: number, tel: number, address: string ): void {
    const userInformation = {
      name : name,
      sex : sex,
      age : age,
      tel : tel,
      address : address
    };
    console.log(userInformation);
    localStorage.setItem('information', JSON.stringify(userInformation));
    location.reload();
  }
}
