import { Action } from '@ngrx/store';

export const TOGGLE_DRAWER = '-[sideList]TOGGLE-';
export const GET_RATINGS = '-[sideList] GET RATINGS-';
export const GET_RATINGS_SUCCESS = '-[sideList] GET RATINGS SUCCESS-';
export const GET_RATINGS_ERROR = '-[sideList] GET RATINGS ERROR-';

export class ToggleDrawer implements Action {
    readonly type = TOGGLE_DRAWER;
    constructor(public payload?: any) {}
}

export class GetRatings implements Action {
    readonly type = GET_RATINGS;
    constructor(public payload?: any) {}
}

export class GetRatingsSuccess implements Action {
    readonly type = GET_RATINGS_SUCCESS;
    constructor(public payload?: any) {}
}

export class GetRatingsError implements Action {
    readonly type = GET_RATINGS_ERROR;
    constructor(public payload?: any) {}
}
