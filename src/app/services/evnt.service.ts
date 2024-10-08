import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evnt} from "../../models/Event";

@Injectable({
  providedIn: 'root'
})
export class EvntService {
  url = 'http://localhost:3000/Evnt';

  constructor(private http: HttpClient) {
  }

  getAllEvents(): Observable<Evnt[]> {
    /*const data = await fetch(this.url);
    return await data.json() ?? [];*/
    return this.http.get<Evnt[]>(this.url)
  }

  _deleteEvent(id: number) {
    const urlId = `http://localhost:3000/Evnt/${id}`;
    return this.http.delete<void>(urlId);
  }
}
