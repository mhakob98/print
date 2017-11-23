import { Component } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent {
    information:string[]=["url(../assets/thailand.jpg)","url(../assets/vietnam.jpg)","url(../assets/restaurant.jpg)"]

}
