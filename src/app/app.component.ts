import { PersonNew } from './store/person.actions';
import { AppState } from './store/index';
import { Person } from './interfaces/person';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// @ts-ignore
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people$: Observable<Person[]> = new Observable();

  constructor(private store: Store<AppState>){}

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString()
    }

    this.store.dispatch(new PersonNew({person}))
  }

  update(p: Person) {

  }

  delete(p: Person) {

  }

}
