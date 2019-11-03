import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	
	users:any='';

  constructor(private _usersService:UsersService) {
	this.loadUsers();
  }

  ngOnInit() {
  }
  
  loadUsers(){
	  return this._usersService.getUsers().subscribe((data: {}) => {
			 this.users = data; 
		})
  }

}
