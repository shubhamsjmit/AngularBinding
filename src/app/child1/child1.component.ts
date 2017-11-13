import {Component, OnInit, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import { WidgetListService } from '../widget-list.service';
import { Item } from '../child2/Item.Interface';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnChanges {
  items: Item[]= [];
  subscription: Subscription;
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
    this.subscription = this.request.navItem$.subscribe(
      item => {
        console.log(item);
      //   if (item !== null) {
      //   this.UpdateDes(item); }
       }
    );
    }
    ngOnChanges(changes) {
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
     }
  }
  UploadData(widget: Item) {
    this.UpdateItemFromChild.emit(widget);
  }
 }
