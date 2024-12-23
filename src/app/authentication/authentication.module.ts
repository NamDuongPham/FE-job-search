import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MembersComponent } from './components/members/members.component';
import { MembersCreateComponent } from './components/members-create/members-create.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesCreateComponent } from './components/companies-create/companies-create.component';
import { NewsComponent } from './components/news/news.component';
import { CvComponent } from './components/cv/cv.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesCreateComponent } from './components/services-create/services-create.component';
import { DashboardComComponent } from './components/dashboard-com/dashboard-com.component';
import { ProfileComComponent } from './components/profile-com/profile-com.component';
import { ComServiceComponent } from './components/com-service/com-service.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { ComNewsComponent } from './components/com-news/com-news.component';
import { ListCvsComponent } from './components/list-cvs/list-cvs.component';
import { InfoComComponent } from './components/info-com/info-com.component';
import { ManaLocationComponent } from './components/mana-location/mana-location.component';
import { ManaCareerComponent } from './components/mana-career/mana-career.component';
import { FindCvsComponent } from './components/find-cvs/find-cvs.component';
import { ComListcvsComponent } from './components/com-listcvs/com-listcvs.component';



@NgModule({
  declarations: [DashboardComponent, SettingComponent,ProfileComponent,
    MembersComponent,MembersCreateComponent, 
    CompaniesComponent,CompaniesCreateComponent,
    NewsComponent,
    CvComponent,
    ServicesComponent, ServicesCreateComponent,
    DashboardComComponent, ProfileComComponent,
    ComServiceComponent,
    ListNewsComponent, AddNewsComponent,
    ComNewsComponent,ListCvsComponent, 
    InfoComComponent,ManaLocationComponent,
    ManaCareerComponent,FindCvsComponent,
    ComListcvsComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule,


  ]

})
export class AuthenticationModule { }
