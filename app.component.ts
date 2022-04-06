import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Data } from './Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactformexample';
  uname:any ;
  passwd : any ;
  
  formdata: FormGroup = new FormGroup({
    uname: new FormControl("admin" , [Validators.required , Validators.minLength(6)]),
    passwd : new FormControl("admin" , [Validators.required , Validators.minLength(8)])

  })

  clickSubmit(tdata:Data)
  {
    this.uname = this.formdata;
    this.passwd = this.formdata; 
  }
}
