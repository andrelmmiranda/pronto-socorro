import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-create',
  templateUrl: './register-create.component.html',
  styleUrls: ['./register-create.component.css']
})
export class RegisterCreateComponent implements OnInit {
  register: Register = {
    name: '',
    age: 0,
    priority: true,
    status: true
  };

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  newRegister(): void{
    const { name, age } = this.register;

    console.log(this.register)

    if(name === '' || age < 0 || this.register === undefined){
      this.registerService.showMessage('O campos precisam ser preenchidos!');
      return;
    }


    this.registerService.createRegister(this.register).subscribe(()=>{
      this.registerService.showMessage('Registrado com sucesso!');
    })
    this.router.navigate(['/registro']);
  }

  cancel(): void{
    this.router.navigate(['/registro']);
  }

}
