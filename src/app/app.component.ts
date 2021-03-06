import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private adalService: AdalService) {

    adalService.init(environment.config);
  }
}
