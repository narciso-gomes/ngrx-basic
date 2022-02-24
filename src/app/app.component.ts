import { Person } from './shared/interfaces/person';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people$: Observable<Person[]> = new Observable();

  addNew() {

  }

  update(p: Person) {

  }

  delete(p: Person) {

  }

}
