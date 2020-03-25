import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  inputmodel: string;
  sharedMessage: string;
  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => this.sharedMessage = message);
  }
  changeMessage() {
    this.data.changeMessage(this.inputmodel);
  }

}
