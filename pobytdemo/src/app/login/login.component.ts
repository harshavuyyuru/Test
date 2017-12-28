import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes,Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ="";
  password ="";
  
  

  constructor(private route:ActivatedRoute,private router:Router) {}
    
    formSubmit(data){
      console.log(data)
      if(this.username == "harsha" && this.password == "harsha" )
      {
    console.log("hello");
  
    this.router.navigate(['feedback']);
    }else
    {
      //error message
    }
    
    }

     ngOnInit() {
  }

}
