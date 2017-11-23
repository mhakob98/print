import { AuthService } from "angular2-social-login";
import {Component,OnDestroy } from '@angular/core';

@Component({
    
    selector: 'registration-form',
    templateUrl: 'registration-form.component.html',
    styleUrls: ['registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnDestroy {
   public user;
 constructor(public _auth: AuthService){ }
  sub:any;
  signIn(provider){

    this.sub = this._auth.login(provider).subscribe(
      (data) => {
                   console.log(data);this.user=data;
                   
                }
    )
  }
 
  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;} 
    )
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
