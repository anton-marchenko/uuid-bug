import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'uuid-test';

  ngOnInit() {
    console.log('uuidv4()', uuidv4());
    this.title = uuidv4();
  }
}
