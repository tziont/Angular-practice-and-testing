import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {
  sharedMessage: string;
  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => this.sharedMessage = message);
  }

}
