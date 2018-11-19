import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetService } from './widget.service';
import { HomeComponent } from './home/home.component';
import { ConctactUsComponent } from './conctact-us/conctact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EditWidgetComponent } from './edit-widget/edit-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConctactUsComponent,
    AboutUsComponent,
    EditWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
