import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import type { SwaggerPost } from './api.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiBase = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly http: HttpClient) {}

  getAllPosts(): Observable<SwaggerPost[]> {
    return this.http.get<SwaggerPost[]>(`${this.apiBase}/posts`);
  }
}
