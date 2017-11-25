export interface IOverride {
  category?:string;
}

export interface ICategoryAsRating {
  code?:string;
  name?:string;
  rating?:number;
  searchName?:string;
}

export interface IReqCfg {
  url?:string;
  data?:object;
  user?:string;
}
  
export interface ISetCfg extends IReqCfg {
  url?:string;
  category?:string;
  storeas?:string;
  user?:string;
  data?:object;
}

export interface IRated {
  status?:string;
  url?:string;
  ratedUrl?:string;
  categories?:string[];
  rating?: number;
  category?: any;
}

export interface IRate extends ISetCfg {
  categoryAsRating?:ICategoryAsRating;  
  url?:string;
  hint?:string;
  status?:string;
}

export interface IHealthCheck {
  name?:string;
  version?:string;
  host?:string;
  build?:string;
  uptime?:number;
  startTime?:string;
}

export interface IOverlay {
  url?:string;
  data?:Object;
  type?:string;
  state?:string;
}

export interface IUtil {
  data:any;
}
