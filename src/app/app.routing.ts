import {Routes , RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppURL } from './app.url';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/public/pages/home/home.component';
import { NewDetailComponent } from './components/public/pages/new-detail/new-detail.component';
import { InfoComponent } from './components/public/pages/info/info.component';
import { ManagerCvComponent } from './components/public/pages/manager-cv/manager-cv.component';
import { ResComComponent } from './components/res-com/res-com.component';
import { CreateCvComponent } from './components/public/pages/create-cv/create-cv.component';
import { PublicNewsComponent } from './components/public/pages/public-news/public-news.component';
import { PublicComComponent } from './components/public/pages/public-com/public-com.component';
import { ComDetailComponent } from './components/public/pages/com-detail/com-detail.component';
import { PageFavouriteComponent } from './components/public/pages/page-favourite/page-favourite.component';
import { StatusCvComponent } from './components/public/pages/status-cv/status-cv.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';


const RouteList: Routes = [
    {path : '' , redirectTo: AppURL.Home , pathMatch: 'full'},
    {path : AppURL.Home, component: HomeComponent}, 
    {path : AppURL.Login, component: LoginComponent},
    {path : AppURL.Rescompany, component: ResComComponent},
    {path : AppURL.Register , component: RegisterComponent},
    {path : AppURL.Detail , component: NewDetailComponent},
    {path : AppURL.ComDetail, component: ComDetailComponent},
    {path : AppURL.InfoUser , component: InfoComponent},
    {path : AppURL.ManaCV , component: ManagerCvComponent},
    {path : AppURL.CreateCv , component: CreateCvComponent},
    {path : AppURL.PublicNews , component: PublicNewsComponent},
    {path : AppURL.PublicComs , component: PublicComComponent},
    {path : AppURL.FavouriteJob , component: PageFavouriteComponent},
    {path : AppURL.StatusCv , component: StatusCvComponent},
    {path : AppURL.Authen , loadChildren: './authentication/authentication.module#AuthenticationModule'},
    {path : AppURL.ForgotPassword , component: ForgotpasswordComponent},
];

export const AppRouting = RouterModule.forRoot(RouteList);

