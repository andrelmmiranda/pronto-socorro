import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-read',
  templateUrl: './register-read.component.html',
  styleUrls: ['./register-read.component.css']
})
export class RegisterReadComponent implements OnInit {

  register: Register[] = [];

  displayedColumns: string[] = ['id', 'name', 'age', 'action'];

  constructor(private registerService: RegisterService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.registerService.readRegister().subscribe(register =>{
      this.register = register;
    })
  }


}
