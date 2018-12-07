import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-xianshi',
  templateUrl: './xianshi.component.html',
  styleUrls: ['./xianshi.component.css']
})
export class XianshiComponent implements OnInit {
  constructor( ) { }

  ngOnInit() {
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
