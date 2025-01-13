import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { AppRouting } from './app.routing';
import { SharedsModule } from './shareds/shareds.module';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helper/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material';
import { PaginationConfig, PaginationModule } from 'ngx-bootstrap';
import { HomeComponent } from './components/public/pages/home/home.component';
import { FooterComponent } from './components/public/layout/footer/footer.component';
import { HeaderComponent } from './components/public/layout/header/header.component';
import { NewDetailComponent } from './components/public/pages/new-detail/new-detail.component';
import { NewsConComponent } from './components/public/layout/newsCon/newsCon.component';
import { InfoComponent } from './components/public/pages/info/info.component';
import { ManagerCvComponent } from './components/public/pages/manager-cv/manager-cv.component';
import { ResComComponent } from './components/res-com/res-com.component';
import { CreateCvComponent } from './components/public/pages/create-cv/create-cv.component';
import { ComTableComponent } from './components/public/layout/com-table/com-table.component';
import { PublicNewsComponent } from './components/public/pages/public-news/public-news.component';
import { PublicComComponent } from './components/public/pages/public-com/public-com.component';
import { ComDetailComponent } from './components/public/pages/com-detail/com-detail.component';
import { PageFavouriteComponent } from './components/public/pages/page-favourite/page-favourite.component';
import { JobFavouriteComponent } from './components/public/layout/job-favourite/job-favourite.component';
import { StatusCvComponent } from './components/public/pages/status-cv/status-cv.component';
import { FindJobComponent } from './components/public/layout/find-job/find-job.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NewDetailComponent,
    NewsConComponent,
    InfoComponent,
    ManagerCvComponent,
    ResComComponent,
    CreateCvComponent,
    ComTableComponent,
    PublicNewsComponent,
    PublicComComponent,
    ComDetailComponent,
    PageFavouriteComponent,
    JobFavouriteComponent,
    StatusCvComponent,
    FindJobComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting,
    SharedsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    PaginationModule,


    
  ],
  providers: [
    authInterceptorProviders,
    PaginationConfig
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
