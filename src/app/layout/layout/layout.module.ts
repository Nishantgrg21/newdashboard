import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CollectionsComponent } from 'src/app/pages/collections/collections.component';
import { CompaignComponent } from 'src/app/pages/compaign/compaign.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HomeComponent,
    CollectionsComponent,
    CompaignComponent,
    ProductsComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,

  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
