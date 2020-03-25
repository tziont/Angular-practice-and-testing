import { Component, ViewChild, AfterViewInit, OnInit } from "@angular/core";
import { ChildComponentComponent } from "../child-component/child-component.component";
import { DataServiceService } from "../data-service.service";
@Component({
  selector: "app-parent-component",
  templateUrl: "./parent-component.component.html",
  styleUrls: ["./parent-component.component.scss"]
})
export class ParentComponentComponent implements AfterViewInit, OnInit {
  constructor(private data: DataServiceService) {}
  @ViewChild(ChildComponentComponent, { static: false })
  child: ChildComponentComponent;

  sharedMessage: string;
  content = "Message from parent via @Input";
  messagefromchild: string;
  messagefromchileViaViewChid: string;
  reciveMessage($event) {
    this.messagefromchild = $event;
  }
  ngAfterViewInit() {
    // without the setTimeout it will throw an error expanation: https://blog.angular-university.io/angular-debugging/
    setTimeout(() => {
      this.messagefromchileViaViewChid = this.child.viewChildMessage;
    }, 0);
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.sharedMessage = message));
  }
}
