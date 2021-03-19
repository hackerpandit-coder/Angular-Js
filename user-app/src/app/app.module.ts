import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [                 // Componant | Directives | Pipes
    AppComponent, UsersComponent, UserImageComponent, UserInfoComponent, HighlightDirective, PipeDemoComponent, CountryCodePipe, FilterPipe, LoginComponent, RegisterComponent
  ],
  imports: [                      // Module - Build-in or Custom module
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [DataService],                  // Service - Register the service with providers
  bootstrap: [AppComponent]       // Root Componant
})
export class AppModule { }
