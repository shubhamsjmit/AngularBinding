import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/items/';
const header = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class WidgetListService {

  constructor( private http: Http ) { }
  loadData() {

    return this.http.get(BASE_URL)
      .map(res => res.json());
  }
  updateData(data) {
    console.log("patch");
    console.log(`BASE_URL${data.id}`);
    return this.http.patch(`BASE_URL${data.id}`, data, header)
      .map(res => res.json());
  }

  checkData(data) {
    console.log(data.id);
    return data.id == null  ? this.postData(data) : this.updateData(data)
      .map(res => res.json());
  }
  postData(data) {
    return this.http.post(BASE_URL, data , header)
      .map(res => res.json());

  }
}
