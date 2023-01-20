import { InstructorGuard } from './Gaurds/instructor.guard';
import { StudentGGuard } from './Gaurds/student-g.guard';
import { CertificateComponent } from './certificate/certificate.component';
import { VideosComponent } from './videos/videos.component';
import { StudentComponent } from './student/student.component';

import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
// import { InstructorComponent } from './instructor/instructor.component';
import { NgModule, ɵresolveComponentResources } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { InstructorComponent } from './instructor/instructor.component';
import { LoginComponent } from './login/login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './Registrarion/registration/registration.component';
import { WelcomComponent } from './welcom/welcom/welcom.component';
import { PaymentComponent } from './payment/payment.component';




const routes: Routes = [
  {path:'',redirectTo:'/welcom',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'regest', component:RegistrationComponent},
  {
    path: 'login', 
    component:LoginComponent,
    canActivate:[AuthGuard]
  },
  {path:'courses/details/:id',component:DetailsComponent},
  {path:'courses/pay/:id',component:PaymentComponent},
  {path:'courses', component:CoursesComponent},
  {path:'welcome',component:WelcomComponent},
  {path:'logout',component:LogoutComponent},
  {path:'instructor',component:InstructorComponent,canActivate:[StudentGGuard]},
  {path:'cart',component:CartComponent},
  {path:'pay',component:PaymentComponent},
  {path:'student',component:StudentComponent},
  {path:'student/vid/:id',component:VideosComponent},
  {path:'student/vid/:id/cert/:id',component:CertificateComponent}
  
];

// ,canActivate:[StudentGGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
