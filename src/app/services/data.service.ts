import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  saveData(email: string, password: string): void{
    // no se que hacer con la info xd
    const data = {email, password}
    console.log(data);
    alert(`Puse que se muestre esto mientras xd email: ${data.email} password:${data.password}`)
  }

  constructor() { }
}
