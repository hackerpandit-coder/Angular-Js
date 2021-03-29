import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './componants/i-am-lazy/i-am-lazy.component';
import { Routes, RouterModule } from '@angular/router';

const LAZY_ROUTE : Routes = [
  {
    path : "",   //http://localhost:4200/lazy
    component : IAmLazyComponent
  }
]

@NgModule({
  declarations: [IAmLazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTE)
  ]
})
export class LazyModule { }
