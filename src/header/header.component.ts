import { Component } from '@angular/core';


@Component({
   
    selector: 'myHeader',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    host:{
    '(window:resize)':'onResize(event)'
}
})
export class HeaderComponent {
    checkResize:boolean=false;
    constructor(){
        this.checkWindowsResize();
    }
    onResize(event)
    {
        
        this.checkWindowsResize();
    }
    checkWindowsResize()
    {
        if(window.innerWidth>1025)
            this.checkResize=true;
        else
            this.checkResize=false;
    }
}
