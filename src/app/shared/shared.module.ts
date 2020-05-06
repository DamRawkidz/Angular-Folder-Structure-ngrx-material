import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDirective } from './directives/demo.directive';
import { DemoPipe } from './pipes/demo.pipe';



@NgModule({
  declarations: [DemoDirective, DemoPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
