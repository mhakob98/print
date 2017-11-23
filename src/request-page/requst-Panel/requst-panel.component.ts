import { Angular2SocialLoginModule } from 'angular2-social-login';
import { Component,Input } from '@angular/core';
import { CardService } from './../../service.card';
@Component({
    moduleId: module.id,
    selector: 'requst-panel',
    templateUrl: 'requst-panel.component.html',
    styleUrls: ['requst-panel.component.scss']
})
export class RequstPanelComponent {
    dataForShow:number//Output
    information = [];
    constructor(private service:CardService)
    {
        this.information = service.information;
    }
    getIndex(index){
        
        this.dataForShow = index;
        
    }
}


