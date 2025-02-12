import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  cartCount = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }


  toggleMenu() {

  }
}
