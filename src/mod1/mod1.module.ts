import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContainerComponent,FormComponent,ListComponent],
  exports:[ContainerComponent]
})
export class Mod1Module { }