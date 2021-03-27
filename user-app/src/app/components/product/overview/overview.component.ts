import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  id : number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      this.id = param['id'];
    })

  }

}
