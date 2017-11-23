import { Injectable } from '@angular/core';
@Injectable()
export class CardService{
    information = [
     {
         label:'Pictures',
         bgUrl:'url(../assets/paris.jpg)',
         bgSmall:''
     },
     {
         label:'Frame',
         bgUrl:'url(../assets/paxije.jpg)',
         bgSmall:'url(../assets/1.jpg)'
     },
     {
         label:'Case',
         bgUrl:'url(../assets/longon.jpg)',
         bgSmall:'url(../assets/2.jpg)'
     },
     {
         label:'Some',
         bgUrl:'url(../assets/eliLondon.jpg)',
         bgSmall:''
     },
     {
         label:'Cup',
         bgUrl:'url(../assets/newYork.jpg)',
         bgSmall:''
    },
     {
         label:'T-shirt',
         bgUrl:'url(../assets/Gyumri.jpg)',
         bgSmall:''
     }
 ]
    
}