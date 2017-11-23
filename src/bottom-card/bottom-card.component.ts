import { CardService } from './../service.card';
import { Component } from '@angular/core';

@Component({
    selector: 'bottom-card',
    templateUrl: 'bottom-card.component.html',
    styleUrls: ['bottom-card.component.css']
})
export class BottomCardComponent {
    information = [];
    constructor(private service:CardService)
    {
        this.information = service.information;
    }
}
