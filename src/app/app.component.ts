import { PersonNew, PersonAll, PersonUpdate, PersonDelete } from './store/person.actions';
import { AppState } from './store/index';
import { Person } from './interfaces/person';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
// @ts-ignore
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  people$: Observable<Person[]> = new Observable();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new PersonAll());
    this.people$ = this.store.pipe(select('people'));
  }

  addNew() {
    let person: Person = {
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString()
    }

    this.store.dispatch(new PersonNew({ person }))
  }

  update(p: Person) {
    console.log(p)
    let person = { ...p }
    person.name = faker.name.findName();
    person.address = faker.address.streetAddress();
    person.city = faker.address.city();
    person.country = faker.address.country();
    person.age = Math.round(Math.random() * 100);
    console.log(person)

    this.store.dispatch(new PersonUpdate({ person }))
  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({ id: p._id }))
  }

}
