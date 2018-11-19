import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-edit-widget',
  templateUrl: './edit-widget.component.html',
  styleUrls: ['./edit-widget.component.css']
})
export class EditWidgetComponent implements OnInit {
  titleErrorMessage: any;
  descriptionErrorMessage: any;
  priceErrorMessage: any;
  editWidget: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _widgetService: WidgetService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this._widgetService.getOneWidgetsById(params['id']).subscribe( 
        (response)=>{
          if(response['status']){
            this.editWidget = response['result'];
          } 
          // this.editWidget = response;
        }, 
        (err)=>{ console.log(err); } 
      );
    });
  }

  updateWidget() {
    this._widgetService.updateWidget(this.editWidget).subscribe( 
      (response)=>{
        this.titleErrorMessage = "";
        this.descriptionErrorMessage = "";
        this.priceErrorMessage = "";
        if(response['status']){
          console.log("SUCCESS")
        } else {
          console.log("ERROR")
          console.log(response)
          if(response['err']['errors']['title']){
              this.titleErrorMessage = response['err']['errors']['title']['message'];
          }
          if(response['err']['errors']['description']){
              this.descriptionErrorMessage = response['err']['errors']['description']['message'];
          }
          if(response['err']['errors']['price']){
              this.priceErrorMessage = response['err']['errors']['price']['message'];
          }
        }
      }, 
      (err)=>{ console.log(err); } 
    );
  }

}
