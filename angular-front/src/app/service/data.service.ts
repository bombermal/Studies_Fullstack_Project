import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = '192.168.1.64:8000/api/clients'; // Replace with your API endpoint

  // constructor(private http: HttpClient) {}

  // getTiles(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
}
