import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { HomeComponent } from './home/home/home.component';
import { RegistrationComponent } from './Registrarion/registration/registration.component';
import { LoginComponent } from './login/login/login.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { WelcomComponent } from './welcom/welcom/welcom.component';
import { LogoutComponent } from './logout/logout.component';
import { InstructorComponent } from './instructor/instructor.component';
import { CartComponent } from './cart/cart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsComponent } from './details/details.component';
import { MaxLenPipe } from './Pipes/max-len.pipe';
import { PaymentComponent } from './payment/payment.component';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { SearchPipe } from './courses/courses/search.pipe';
import { CertificateComponent } from './certificate/certificate.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    CoursesComponent,
    WelcomComponent,
    LogoutComponent,
    InstructorComponent,
    CartComponent,
    DetailsComponent,
    MaxLenPipe,
    PaymentComponent,
    StudentComponent,
    VideosComponent,
    SearchPipe,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
