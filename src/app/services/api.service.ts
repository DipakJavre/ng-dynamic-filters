import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SelectOption } from '@ngx-filter';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) {}

  getData(endPoint: string): Observable<any> {
    return this.http.get(this.apiUrl + endPoint);
  }

  postData(endPoint: string, payload: any): Observable<any> {
    return this.http.post(this.apiUrl + endPoint, payload);
  }

  getOptions(name: string): Observable<SelectOption[]> {
    return this.http.get<any[]>(`${this.apiUrl}categories/search?name=${name}`).pipe(
      map((categories) =>
        categories.map((cat) => ({
          label: cat.name,
          value: cat.name,
        }))
      )
    );
  }
}
