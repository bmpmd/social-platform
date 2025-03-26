import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = [
    {id:1, name: "john"},
    {id: 2, name: "jane"}

  ]

  constructor() { }

  getUsers(){
    return of(this.user)
  }
}
