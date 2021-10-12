import { Component, OnInit } from '@angular/core';
import { Register } from '../../register/register.model';
import { RegisterService } from '../../register/register.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  register: Register[] = [];

  status:boolean = false;
  
  displayedColumns: string[] = ['id', 'name', 'age', 'priority'];

  constructor(private registerService: RegisterService){}

  ngOnInit(): void{
    this.registerService.readRegister().subscribe(register =>{
      this.register = register;
      console.log(this.register)
    })
  }
}
