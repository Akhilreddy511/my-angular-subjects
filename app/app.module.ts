import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { DataShareService } from './data-share.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UserService,DataShareService],
})
export class AppModule {}
