import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
<<<<<<< HEAD

  onSelectUser(id: string) {
    console.log('Selected user: ' + id)
  }
=======
  hallo = "Hi";
>>>>>>> fac4f2333050f29398e53a1ba4387e55eff95aef
}
