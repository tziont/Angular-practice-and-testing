import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit{
  constructor(private data: DataServiceService) { }

 viewChildMessage = 'message from child via ViewChild';
 message = 'message from child via EventEmitter';
 sharedMessage: string;

@Input()
content: string;

@Output()
emitEvent = new EventEmitter();

ngOnInit() {
 this.data.currentMessage.subscribe((message) => this.sharedMessage = message);
}
sendMessage() {
  this.emitEvent.emit(this.message);
}

}
