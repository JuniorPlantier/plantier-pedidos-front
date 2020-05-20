import { IonicPageModule } from 'ionic-angular/module'; 
import { NgModule } from '@angular/core'; 
 
import { HomePage } from './home'; 

@NgModule({ 
     declarations: [HomePage] // página
    ,imports: [IonicPageModule.forChild(HomePage)] 
}) 
export class HomeModule { 
}