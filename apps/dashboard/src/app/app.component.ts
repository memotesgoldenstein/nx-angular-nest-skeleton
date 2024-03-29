import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget } from '@prod-angular-pco/api-interfaces';

@Component({
  selector: 'prod-angular-pco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Widget>('/api/hello');
  constructor(private http: HttpClient) {}
}
