import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WebService {

  constructor(private http: HttpClient) {}
  getMessages() {
    return this.http.get('http://localhost:1234/messages').pipe(
      map();
    );
  }
}
