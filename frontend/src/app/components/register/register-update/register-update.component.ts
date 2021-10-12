import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../register.model';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.css']
})
export class RegisterUpdateComponent implements OnInit {
  register: Register = {
    name: '',
    age: 0,
    priority: true,
    status: true
  };


  constructor(
    private registerService: RegisterService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.registerService.readById(id!).subscribe(register =>{
      this.register = register;
    })
  }

  update(): void{
    const { name, age } = this.register;

    if(name === '' || age < 0 || this.register === undefined){
      this.registerService.showMessage('O campos devem estar preenchidos!');
      return;
    }

    if(isNaN(age)){
      this.registerService.showMessage('Idade de ser um número!');
      return;
    }

    this.registerService.updateRegister(this.register).subscribe(()=>{
      this.registerService.showMessage('Registro atualizado!');
      this.router.navigate(['/registro']);
    })
  }

  cancel(): void{
    this.router.navigate(['/registro']);
  }
}
