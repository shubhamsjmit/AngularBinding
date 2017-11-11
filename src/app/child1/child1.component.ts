import {Component, OnInit, Input, OnChanges, EventEmitter, Output} from '@angular/core';
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
  @Output() UpdateItemFromChild: EventEmitter<Item> = new EventEmitter<Item>();
  ngOnInit() {
    this.request.loadData()
      .subscribe((data) => {
        this.items = data;
        console.log('ghgf');
      });
    }
    UpdateDes(Upditem: Item ) {
      if (Upditem.id == null) {
        this.items.push(Upditem);
      } else {
        console.log('heloo');
     }
  }
  UploadData(widget: Item) {
    this.UpdateItemFromChild.emit(widget);
  }
 }
