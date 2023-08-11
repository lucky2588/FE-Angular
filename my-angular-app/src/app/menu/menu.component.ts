import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  isCheck :boolean = false;
    
  constructor(public hardcodeAuthetication : HardcodeAuthenticationService){
  }

  ngOnInit(): void {
    this.isCheck = this.hardcodeAuthetication.isLoggedUser();
}


}
