import { Component, OnInit } from '@angular/core';
import { RegisterTable } from '../Model/RegisterTable';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-proregister',
  templateUrl: './proregister.component.html',
  styleUrls: ['./proregister.component.css']
})
export class ProregisterComponent implements OnInit {

  constructor(private ConnectionService:SigninService) { }

  ngOnInit(): void {
  }

  pageData:RegisterTable={RId:"",RMail:"",RPassword:"",Name:""};
  
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
        alert("data already present");
      }
    })

  }
}
