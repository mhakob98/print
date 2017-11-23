import { Message } from 'primeng/primeng';
import {
    Component,
    Input
} from '@angular/core';

@Component({

    selector: 'shop-card',
    templateUrl: 'shop-card.component.html',
    styleUrls: ['shop-card.component.scss']
})
export class ShopCardComponent {
    //////////////////////////////
    @Input() tempData: number;
    deleted:boolean=false;
    display: boolean = false;
 ////////////////////////////////////////////////
    uploadedFiles: any[] = [];
    onUpload(event) {

      
        for(let file of event.files) {
            this.uploadedFiles.push(file);
            
        }
        console.log(this.uploadedFiles);
        
        
    }
/////////////////////////////////////////////////////////
    showDialog() {
        this.display = true;
    }
    ngDoCheck() {
        if(!this.deleted){
        for (var j of this.data) {
            if (j.index == this.tempData ) {
                this.dataForShow.push(j);
                this.tempData = undefined;
            }
          }
        }    
        
        this.deleted=false;
    }

    deleteItem(item: any) {
       let index = this.dataForShow.indexOf(item)
       if(index>-1)
       {
        
           this.dataForShow.splice(index,1);
           this.deleted =true;
            
       }
    }
      description = [{
        
           productId : 'Product 1',
           price : '5000',
           discount : '10',
    }]
    data = [{
            index: 0,
            name: 'Pictures',
            bgUrl:'url(../../assets/cup.png)',
        },
        {
            index: 1,
            name: 'frame',
            bgUrl:'url(../../assets/t-shirt.png)',
        },
        {
            index: 2,
            name: 'case',
            bgUrl:'url(../../assets/frame.png)',
        }
    ]
    dataForShow = []
  
}