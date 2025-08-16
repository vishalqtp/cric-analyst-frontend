import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = 'Loading...';

  // Replace with your backend URL
  private _apiUrl = 'http://localhost:3000/api/hello';
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value) {
    this._apiUrl = value;
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (res) => this.message = res.message,
      error: (err) => this.message = 'Error fetching message'
    });
  }
}