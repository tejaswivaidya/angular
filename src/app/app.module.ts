import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { DirectiveComponent } from './directive/directive.component';
import { FirstDirective } from './first.directive';
import { SecondDirective } from './second.directive';
import { ServiceDemoComponent } from './service-demo/service-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    DirectiveComponent,
    FirstDirective,
    SecondDirective,
    ServiceDemoComponent
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
