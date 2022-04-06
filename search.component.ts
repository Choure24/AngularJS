import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
pid:number = 0 ;
 
constructor(private service: CommentService) { }


cmts:any;
ngOnInit(): void {
  this.service.getAllComments()
  .subscribe( response =>{
    this.cmts=response;
    //console.log(response);
  }
  );
  //console.log(this.cmts);
}
onClickSearch(pid:number)
{
  
}
}
