import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterTable } from '../Model/RegisterTable';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-proregister',
  templateUrl: './proregister.component.html',
  styleUrls: ['./proregister.component.css']
})
export class ProregisterComponent implements OnInit {

  constructor(private ConnectionService:SigninService, private router:Router) { }

  ngOnInit(): void {
  }

  pageData:RegisterTable={RId:"",RMail:"",RPassword:"",Name:""};

  ToHome():void{
    console.log("Navigating to Home Page");
    this.router.navigate(['']);
  }
  
  Register(formdata:any):void
  {
    //debugger;
    if(this.pageData.RId=="Admin"){
      this.pageData.RId="A";
    }
    else{
      this.pageData.RId="S";
    }

    this.ConnectionService.ProRegister(this.pageData).subscribe(data=>
    {
      if(data==true){
        alert("Register Successful");
      }
      else{
        alert("The entered Mail ID is already present");
        this.router.navigate(['']);
      }
    })

  }
}
