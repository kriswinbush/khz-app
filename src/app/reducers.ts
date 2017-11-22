import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { sideListReducer } from './components/side-list/side-list.reducer';
import { ISideList } from './components/side-list/i-side-list';

export interface State {
    sideList: ISideList;
}

export const reducers: ActionReducerMap<State> = {
    sideList: sideListReducer
};

export const getSideListState = createFeatureSelector<ISideList>('sideList');
