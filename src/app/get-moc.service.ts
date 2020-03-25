import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMocService {

  constructor(private http: HttpClient) { }

getMoc() {
  return this.http.get('assets/moc.json');
}
}
