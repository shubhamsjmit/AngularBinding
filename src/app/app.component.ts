import { Component } from '@angular/core';
import { Item } from './child2/Item.Interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  UpdateItem: Item;
}
