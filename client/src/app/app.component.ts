import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/user').subscribe({
      next: (data) => (this.users = data),
      error: (error) => console.log('Error occured', error),
      complete() {
        console.log('completed');
      },
    });
  }
}
