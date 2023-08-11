import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataServiceService } from '../service/welcome-data-service.service';

@Component({
  selector: 'app-seccess',
  templateUrl: './seccess.component.html',
  styleUrls: ['./seccess.component.css'],
})
export class SeccessComponent implements OnInit {
  username = '';
  dataMesseage:string="";
  apiData: any;
  myVariable: string =""; // Khai báo biến bên ngoài constructor()



  constructor(
    public router: ActivatedRoute,
    public httpService: WelcomeDataServiceService
  ) {}

  ngOnInit(): void {
    this.username = this.router.snapshot.params['name'];
  }



  getMessageWithParams(name:any) {
    this.httpService.executeHelloWorldServiceWithPathVariable(this.username).subscribe(
     res => this.handlenSeccessWithParams(res),
     error => this.handlenError(error)
   );
 }

  hanlenSeccessResquest(res : any){

    this.dataMesseage = res.messeage;
  }

  handlenError(err :any){

    this.dataMesseage = "have Exceition when calling API "
  }


  handlenSeccessWithParams(res:any){

    this.myVariable = res.messeage;
  }

  createBasicAuthenticationHtttHeader(){
    let username = "thang"
    let password = "123"
    let basicAutHeaderString = `Basic ` + window.btoa(username +":"+password);
    return basicAutHeaderString;
   }


}
