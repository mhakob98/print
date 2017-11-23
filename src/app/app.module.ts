import { ShopCardComponent } from './../request-page/shop-card/shop-card.component';
import { RequstPanelComponent } from './../request-page/requst-Panel/requst-panel.component';
import { CardService } from './../service.card';
import { RequestPageComponent } from './../request-page/request-page.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../Pages/home/home.component'
import { AdvertismentComponent } from '../advertisment/advertisment.component'
import { CardComponent } from '../card/card.component'
import { BubblesComponent } from '../bubbles/bubbles.component'
import { BottomCardComponent } from '../bottom-card/bottom-card.component'
import { ReviewsComponent } from '../reviews/reviews.component'
import { RegistrationFormComponent } from '../registration-form/registration-form.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { MdButtonModule,MdIconModule } from '@angular/material';
import { NgxCarouselModule } from 'ngx-carousel';
import { CommonModule } from '@angular/common';
import { MdInputModule,MaterialModule } from '@angular/material';
import { BottomPanelComponent } from '../bottom-panel/bottom-panel.component';
import {GMapModule} from 'primeng/primeng';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { CheckboxModule,DialogModule,ButtonModule,GrowlModule,FileUploadModule} from 'primeng/primeng';


let providers = {
  "google": {
      "clientId": "476865999020-dnsghkljjr9rb7ncajv81l0k7hu3n69o.apps.googleusercontent.com"
    },
    "facebook": {
      "clientId": "882271781934360",
      "apiVersion": "v2.10" //like v2.4 
    }
  };
 
 const appRoutes: Routes = [
   { path:'home',component:HomeComponent },
   { path:'',redirectTo:'home',pathMatch: 'full'},
   { path:'registration',component:RegistrationFormComponent},
   { path:'request',component:RequestPageComponent },
  ];


@NgModule({
  declarations: [
    AdvertismentComponent,
    AppComponent,
    HeaderComponent,
    CardComponent,
    BottomCardComponent,
    BubblesComponent,
    ReviewsComponent,
    RegistrationFormComponent,
    BottomPanelComponent,
    HomeComponent,
    RequestPageComponent,
    RequstPanelComponent,
    ShopCardComponent,
   
   ],
 
  imports: [
    FileUploadModule,
    DialogModule,
    GMapModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    FormsModule,
    MdIconModule,
    NgxCarouselModule,
    CommonModule,
    MdInputModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    Angular2SocialLoginModule,

      GrowlModule,
      CheckboxModule,
      ButtonModule,
    

  ],
  
  providers: [CardService],
  
  bootstrap: [AppComponent]
})
export class AppModule { constructor(){} }
Angular2SocialLoginModule.loadProvidersScripts(providers);