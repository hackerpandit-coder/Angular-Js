import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EmployeeModule } from './modules/employee/employee.module';

@NgModule({
  declarations: [                 // Componant | Directives | Pipes
    AppComponent, UsersComponent, UserImageComponent, UserInfoComponent, HighlightDirective, PipeDemoComponent, CountryCodePipe, FilterPipe, LoginComponent, RegisterComponent, ObservableDemoComponent, HeaderComponent, ProductComponent, OverviewComponent, SpecificationComponent, LogoutComponent
  ],
  imports: [                      // Module - Build-in or Custom module
    BrowserModule, FormsModule,EmployeeModule, ReactiveFormsModule,HttpClientModule,RouterModule.forRoot(APP_ROUTES)
  ],
  //providers: [DataService,AuthService,AuthInterceptorService],                  // Service - Register the service with providers
  providers: [DataService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  },
  {
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  }
],


  bootstrap: [AppComponent]       // Root Componant
})
export class AppModule { }
