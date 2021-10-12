import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/components/register/register.service';

@Component({
  selector: 'app-register-general',
  templateUrl: './register-general.component.html',
  styleUrls: ['./register-general.component.css']
})
export class RegisterGeneralComponent implements OnInit {


  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  toNewRegister(): void{
    this.router.navigate(['/registro/novo']);
  }

}
