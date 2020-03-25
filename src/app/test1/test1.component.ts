import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetMocService } from '../get-moc.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor(private getMocService: GetMocService) { }
myMoc
check;
$res;
  ngOnInit() {
    this.getMocService.getMoc().subscribe((data) => this.myMoc = data);
   }
 // sort by age and if equal sort by name
  sortMyArr() {

    this.myMoc.sort((a, b) => 
     a.age === b.age
     ?(a.name === b.name ? 0
     : +(a.name > b.name) || -1)
     : +(a.age > b.age) || -1)
  }

}
