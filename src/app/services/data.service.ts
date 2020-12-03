import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  saveData(data: object): void{
    // no se que hacer con la info xd
    console.log(data);
  }

  constructor() { }
}
