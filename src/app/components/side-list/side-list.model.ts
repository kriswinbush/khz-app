export class SideList {
  constructor(public active:string, public isOpen:boolean, public isMobile:boolean) {}
}

export const initSideList: SideList = { 
  active:'close',
  isOpen: false,
  isMobile: false
}
