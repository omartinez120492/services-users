import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styles: ``
})
export class ShowallComponent implements OnInit {

  public users: User[] = [];

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.users = this.userService.getAll;
  }



}
