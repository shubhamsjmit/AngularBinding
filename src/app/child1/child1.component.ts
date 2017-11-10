import { Component, OnInit, Input } from '@angular/core';
import { WidgetListService } from '../widget-list.service';
import { Item } from '../child2/Item.Interface';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  items: Object [];
  constructor(private request: WidgetListService ) {}
  @Input() UpItem: Item ;
  ngOnInit() {
    this.request.loadData()
      .subscribe((data) => {
        this.items = data;
      });
  }
}