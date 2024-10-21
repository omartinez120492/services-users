import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: ``
})
export class AddComponent {
  constructor(private userService: UserService){ } 

  public user: User = {
    id: '',
    name: '',
    lastName: '',
    age: 0,
    gender: ''
  }

  public addUser(): void {
    this.userService.createUser(this.user);
  }
}
