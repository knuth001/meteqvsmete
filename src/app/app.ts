import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';
import type { SwaggerPost } from './api.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('meteqvsmete');
  protected readonly posts = signal<SwaggerPost[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal('');

  private readonly apiService = inject(ApiService);

  constructor() {
    this.apiService.getAllPosts().subscribe({
      next: (data) => {
        this.posts.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('GET request failed');
        this.loading.set(false);
        console.error(err);
      }
    });
  }
}
