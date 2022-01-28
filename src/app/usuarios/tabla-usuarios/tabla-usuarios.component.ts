import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css'],
})
export class TablaUsuariosComponent implements OnInit {
  users: any[] = [];
  constructor(private usersservice: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersservice.getUsers().subscribe((data) => {
      this.users = data.data;
      console.log(this.users);
    });
  }
}
