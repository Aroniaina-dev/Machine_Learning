import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  private apiUrl = 'http://127.0.0.1:5000/api/produits';
  private apiUrl_post = 'http://127.0.0.1:5000/api/value';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  sendData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl_post, data);
  }
}
