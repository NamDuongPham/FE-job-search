import {Routes , RouterModule} from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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

const RouteList: Routes = [
    {path : '' , redirectTo: AuthURL.Dashboard , pathMatch: 'full'},
    {path : AuthURL.Dashboard, component: DashboardComponent},
    {path : AuthURL.Setting, component: SettingComponent},
    {path : AuthURL.Profile, component: ProfileComponent},
    {path : AuthURL.Members, component: MembersComponent},
    {path : AuthURL.MembersCreate, component: MembersCreateComponent},
    {path: AuthURL.Companies, component: CompaniesComponent},
    {path: AuthURL.CompaniesCreate, component:CompaniesCreateComponent},
    {path: AuthURL.News, component:NewsComponent},
    {path: AuthURL.Cvs, component:CvComponent},
    {path: AuthURL.Services, component:ServicesComponent},
    {path: AuthURL.ServicesCreate, component:ServicesCreateComponent},
    {path: AuthURL.DashboardCom, component:DashboardComComponent},
    {path: AuthURL.ProfileCom, component:ProfileComComponent},
    {path: AuthURL.ComService, component:ComServiceComponent},
    {path: AuthURL.ListNews, component:ListNewsComponent},
    {path: AuthURL.AddNews, component:AddNewsComponent},
    {path: AuthURL.NewCv, component:ComNewsComponent},
    {path: AuthURL.LisCv+'/:id', component:ListCvsComponent},
    {path: AuthURL.InfoCom, component:InfoComComponent},
    {path: AuthURL.Manalocation, component:ManaLocationComponent},
    {path: AuthURL.ManaCareer, component:ManaCareerComponent},
    {path: AuthURL.SearchCv, component:FindCvsComponent},
    {path: AuthURL.ListSaveCV, component:ComListcvsComponent},

];

export const AuthenticationRouting = RouterModule.forChild(RouteList);

