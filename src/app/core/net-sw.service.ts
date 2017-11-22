import { Injectable } from '@angular/core';

@Injectable()
export class NetSwService {

  constructor() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js', {scope: '/'})
      .then(function(reg) {
        // registration worked
        console.log( reg);
      }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
      });
    }
   }

}
