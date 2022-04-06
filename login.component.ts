import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./app.component.css']
})
export class LoginComponent {
  uname:any ;
  passwd : any ;

  formdata:FormGroup = new FormControl({

  })
  
}