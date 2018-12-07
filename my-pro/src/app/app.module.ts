import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { XianshiComponent } from './xianshi/xianshi.component';
import { BianjiComponent } from './bianji/bianji.component';
import { ChakanComponent } from './chakan/chakan.component';


@NgModule({
  declarations: [
    AppComponent,
    XianshiComponent,
    BianjiComponent,
    ChakanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
