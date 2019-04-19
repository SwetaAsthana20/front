import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';   
import {RequestOptions} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor( private http:Http)
  {}
  form;
  t="";
  temp;
  filename;
  file:any;
  t2;
  disp=true;
  disp1=false;
  disp2=false;
  disp3=false;
  abc(t)
  {
    this.t=t;
    console.log(t);
  }
  send(file)
  {
    
    console.log(file);
    this.filename=file;
  


    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      this.temp=fileReader.result;
      console.log(this.temp);
     
      this.sending();
    }
    fileReader.readAsText(this.file);
  }
 
 
  fileChanged(e) {
    this.file = e.target.files[0];
  }
  
 sending()
  {
    let i:any;
    if(this.t==".json")
    {
      let re=' [ ';
      this.temp=this.temp.replace(/{/g,'%7B');
      this.temp=this.temp.replace(/}/g,'%7D');
      this.temp=this.temp.replace(/]/g,'%5D');
      this.temp=this.temp.replace(/[[\]]/g,'%5B');
      console.log(this.temp);
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');    	
      let options = new RequestOptions({ headers: myHeaders });
      this.http.post('http://localhost:8090/Project_1/rest/UDPService/udpsen?'+'temp='+this.temp,this.t).subscribe(data=>console.log('Data sent'))
      
    }
    else{
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');    	
    let options = new RequestOptions({ headers: myHeaders });
    this.http.post('http://localhost:8090/Project_1/rest/UDPService/udpsen?'+'temp='+this.temp,this.t).subscribe(data=>console.log('Data sent'))
    }
    this.disp3=true;
    this.disp=false;
    this.disp1=false;
    this.disp2=false;
  }

  option(t2)
  {
    if(t2=="file")
    {
    this.disp1=true;
    this.disp=false;
    this.disp3=false;
    }
    if(t2=="form")
    {
      this.disp=false;
      this.disp2=true;
      this.disp1=false;
      this.disp3=false;
    }
  }
  back()
  {
    this.disp=true;
    this.disp1=false;
    this.disp2=false;
    this.disp3=false;
    
  }
  sendtext(name,id,salary)
  {
    this.temp=name+","+id+","+salary;
    console.log(this.temp);
    this.sending();
  }
  onSubmit(name,id,salary)
  {
    if(name==""||id==""||salary=="")
    {
      alert(" 🤔All Fields are Required 🤔..............Please Enter all Details 😕");
    }
    else{
    this.sendtext(name,id,salary);
      }
  }


}

