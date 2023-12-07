import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mod1-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  myvalue:string='mohsin'

  ngOnInit() {
  }

}