import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  private apiUrl = environment.end_point+'produits';
  private apiUrl_post = environment.end_point+'value';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  sendData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl_post, data);
  }
}
