import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor()
  {

  }
  todayDate()
  {
    let ndate = new Date() ;
    return ndate ;
  }
}
