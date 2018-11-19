import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(private _httpClient: HttpClient) { }

  getAllWidgets() {
    console.log("ANGULAR > WidgetService > getAllWidgets()");
    return this._httpClient.get("/widgets");
  }
  
  getOneWidgetsById(id) {
    console.log("ANGULAR > WidgetService > getAllWidgets()");
    return this._httpClient.get( "/widgets/"+id );
  }

  createWidget(newWidget): Observable<any> {
    return this._httpClient.post( "/widgets", newWidget);
  }

  deleteWidget(id) {
    return this._httpClient.delete( "/widgets/" + id);
  }

  updateWidget(editWidget) {
    return this._httpClient.put( "/widgets/"+editWidget._id, editWidget);
  }

}
