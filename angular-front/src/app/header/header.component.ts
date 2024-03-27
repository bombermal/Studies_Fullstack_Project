import { Component, OnInit } from '@angular/core';
// Service
import { SidenavService } from '../service/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user_name: string = "Peter Parker";
  account_number: number = 123;
  user_balance: number = 1000;
  constructor(private SidenavService: SidenavService) { }

  ngOnInit(): void {
    
  }

  toggleSidenav(): void {
    this.SidenavService.toggleSidenav();
  }

  clients: Client[] = [
    {id: 1, user_name: 'Peter Parker'},
    {id: 2, user_name: 'Miles Morales'},
    {id: 3, user_name: 'Gwen Stacy'},
  ];

  accounts: Account[] = [
    {id: 1, account_number: 123},
    {id: 2, account_number: 189},
    {id: 3, account_number: 456},
  ];
}

interface Client {
  id: number;
  user_name: string;
}

interface Account {
  id: number;
  account_number: number;
}