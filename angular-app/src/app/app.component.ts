import { Component, OnInit } from '@angular/core';
import { WidgetService } from './widget.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    widgets: any[];
    newWidget: any;
    editWidget: any;
    titleErrorMessage: any;
    descriptionErrorMessage: any;
    priceErrorMessage: any;
    
    constructor(private _widgetService: WidgetService) {}

    ngOnInit() {
    console.log("ANGULAR > AppComponent > ngOnInit()");
        this.getAllWidgets();
        this.newWidget = { title: '', description: '', price: 0 };
        this.editWidget = null;
    }

    getAllWidgets() {
        console.log("ANGULAR > AppComponent > getAllWidgets()");
        this._widgetService.getAllWidgets().subscribe(
            (serverWidgets: any[])=>{
                console.log("ANGULAR > AppComponent > getAllWidgets response: ", serverWidgets);
                this.widgets = serverWidgets;   
            },
            (error)=>{
                console.log(error);
            });
    }

    createWidget() {
        console.log("ANGULAR > AppComponent > createWidget(), newWidget", this.newWidget);
        this._widgetService.createWidget(this.newWidget).subscribe(
            (response)=>{
                if(response['status']){
                    this.newWidget = { title: '', description: '', price: 0 };
                    this.getAllWidgets();
                } else {
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
            (error)=>{ 
                console.log(error) 
            })
    }

    deleteWidget(id: any) {
        console.log("ANGULAR > AppComponent > deleteWidget(id), id", id);
        this._widgetService.deleteWidget(id).subscribe(
            (response) => {
                console.log("ANGULAR > AppComponent > getAllWidgets response: ", response);
                this.getAllWidgets();
            },
            (error)=>{ 
                console.log(error) 
            })
    }

    updateWidget() {
        this._widgetService.updateWidget(this.editWidget).subscribe(
            (response) => {
                console.log("ANGULAR > AppComponent > updateWidget response: ", response);
                this.editWidget = null;
                this.getAllWidgets();
            },
            (error)=>{ 
                console.log(error) 
            })
    }

}
