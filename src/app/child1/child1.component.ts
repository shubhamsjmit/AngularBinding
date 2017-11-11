import {Component, OnInit, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import { WidgetListService } from '../widget-list.service';
import { Item } from '../child2/Item.Interface';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnChanges {
  items: Object []= [];
  private upItem: Item ;
  constructor(private request: WidgetListService ) {}
  @Input()
  public set UpItem(value: Item){
    this.upItem = value;
    this.UpdateDes(value);
  }
  @Output() UpdateItemFromChild: EventEmitter<Item> = new EventEmitter<Item>();
  ngOnInit() {
    this.request.loadData()
      .subscribe((data) => {
        this.items = data;
        console.log('ghgf');
      });
    }
    ngOnChanges(changes) {
    console.log(changes);
      if (changes.UpItem.name !== undefined) {
        this.UpdateDes(changes.UpItem);
      }
    }
    UpdateDes(Upditem: Item ) {
    console.log('hahahahahah')
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
