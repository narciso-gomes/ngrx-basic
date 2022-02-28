import { PersonNew, PersonAll, PersonUpdate, PersonDelete } from './store/person.actions';
import { AppState } from './store/index';
import { Person } from './interfaces/person';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromPersonSelectors from './store/person.selectors'
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
    this.people$ = this.store.select(fromPersonSelectors.selectAll);
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

    this.store.dispatch(new PersonUpdate({ id: person._id, changes: person }));
  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({ id: p._id }))
  }

}
