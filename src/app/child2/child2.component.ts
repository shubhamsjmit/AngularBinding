import {Component, OnInit, Output, Input, OnChanges} from '@angular/core';
import { Item } from './Item.Interface';
import { WidgetListService } from '../widget-list.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})


export class Child2Component implements OnInit, OnChanges {
@Output() WidgetItem: EventEmitter<Item> = new EventEmitter<Item>();
@Input() UpItem;

  widget: Item = {
    name: '',
    desc: '' ,
    id: null
  }
  constructor( private request: WidgetListService ) { }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes.UpItem.currentValue !== changes.UpItem.previousValue) {
      this.widget = changes.UpItem.currentValue;
    }
  }
  checkData( Widget: Item) {
    this.request.checkData(Widget)
      .subscribe(data => {
        this.WidgetItem.emit(Widget);
      });
    Widget.name = '';
    Widget.desc = '';
    Widget.id = null;
  }
}
