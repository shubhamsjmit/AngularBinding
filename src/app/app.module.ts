import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { RouterModule } from '@angular/router';
import { WidgetListService } from './widget-list.service';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DataChangeDirective } from './child1/data-change.directive';
import { DisplayBlogComponent } from './display-blog/display-blog.component';

const approutes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: Child1Component},
  {path: 'about', component: Child2Component},
  {path: '**', component: Child1Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    DataChangeDirective,
    DisplayBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    // , RouterModule.forRoot(approutes)
  ],
  providers: [ WidgetListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
