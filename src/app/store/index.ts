import { ActionReducerMap } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export interface AppState{
  people: fromPersonReducer.PeopleState

}

export const appReducers : ActionReducerMap<AppState, any> = {
  people: fromPersonReducer.reducer
}
