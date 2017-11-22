import { Action, ActionReducer } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TOGGLE_DRAWER } from './side-list.actions';
import { SideList } from './side-list.model';
import { ISideList } from './i-side-list';

export const initSideList:ISideList = { active:'close', isOpen: false, isMobile: false };

export function sideListReducer(state:ISideList = initSideList, action:Action){
  switch(action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {active: state.active === 'open' ? 'close' : 'open'});
    default:
      return state;  
    }
}
export const getSideListState = createFeatureSelector<SideList>('sideListReducer')
export const getToggle = createSelector( getSideListState, (state:ISideList) => state );
