import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { HomeComponent } from './home.component';
import { MyLibModule } from 'my-lib';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [MyLibModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
