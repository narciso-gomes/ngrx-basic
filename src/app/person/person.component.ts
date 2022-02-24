import { Person } from './../shared/interfaces/person';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person!: Person;
  @Output() delete: EventEmitter<Person> = new EventEmitter();
  @Output() update: EventEmitter<Person> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}