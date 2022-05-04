import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.css']
})
export class UploadingComponent implements OnInit {

  public message:string;
  public progress:number;

  // @Output() public onUploadFinished=new EventEmitter();
  constructor( private http:HttpClient) { }


  ngOnInit(): void {
  }

  public uploadFile=(files)=>{
    if(files.length===0){
      return ;
    }
    let fileToUpload=<File>files[0];
    const formData=new FormData();
    formData.append('file',fileToUpload,"abcd+mailId");
    this.http.post('https://localhost:44358/api/FIleUpload',formData).subscribe(data=>{
      console.log(data);
    })
  }
}
