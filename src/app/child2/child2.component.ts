import {Component, OnInit, Output} from '@angular/core';
import { Item } from './Item.Interface';
import { WidgetListService } from '../widget-list.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})


export class Child2Component implements OnInit {
@Output() WidgetItem: EventEmitter<Item> = new EventEmitter<Item>();
  constructor( private request: WidgetListService ) { }
   widget: Item = {
    name: '',
    desc: '' ,
    id: null
  }

  ngOnInit() {
  }
  checkData( Widget: Item) {
    this.request.checkData(Widget)
      .subscribe(data => {
        this.WidgetItem.emit(Widget);
      });
  }
}
