import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Here the data come...')
    },3000)
  })

  contact_number : number = 9867180727;

  constructor() { }

  ngOnInit(): void {
  }

}
