import { Injectable, EventEmitter } from '@angular/core';
import { VotsMenuItem } from '../../models/MenuModels';
import { Observable, from, interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrchestrationService {

  //Subject can be used to multicast (more here  https://netbasal.com/event-emitters-in-angular-13e84ee8d28c)
  private _menuSelectedSubject = new Subject<VotsMenuItem>();
  //This observable can be used to subscribe within different components and service.
  MenuSelected  = this._menuSelectedSubject.asObservable();

  public OnMenuSelected(votsMenuItem: VotsMenuItem): void {
    this._menuSelectedSubject.next(votsMenuItem);
  }
  constructor() { }
}
