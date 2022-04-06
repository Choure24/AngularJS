import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comments } from '../Comments';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 isValidFormSubmitted  = false ;
 msg : any ;
  cid = 0 ;
  pid=0;
  commenter = "";
  comment="";
  constructor( private service : CommentService, private router : Router) { }

  ngOnInit(): void {
  }
  formdata:FormGroup = new FormGroup({
cid : new FormControl("anything" , [Validators.required , Validators.minLength(1) , Validators.maxLength(4)]), 
pid : new FormControl("1" , [Validators.required , Validators.minLength(4) , Validators.maxLength(4)]) , 
commenter : new FormControl("Name", [Validators.required , Validators.minLength(5) , Validators.maxLength(10)]) ,
comment :new FormControl("Comment", [Validators.required , Validators.minLength(10) ,Validators.maxLength(20)]) 
})

check(comment : Comments )
{
  this.isValidFormSubmitted  = false ;
  if(this.formdata.valid) {
    this.isValidFormSubmitted = true ;
    this.msg = "comment inserted ";
    this.insertComment() ; 
  }
  else{
    this.msg = "Cannot be inserted "
  }
}
  insertComment()
  {
    let cmt:Comments ={
      "cid" : this.cid , 
      "pid":this.pid ,
      "commenter": this.commenter , 
      "comment":this.comment
   
    }
    console.log(this.cid + " "+ this.commenter + " " +this.pid + " " + this.comment) ;
   this.service.registerComment(cmt) ;
    //this.router.navigateByUrl("display") ; 
  }
}
