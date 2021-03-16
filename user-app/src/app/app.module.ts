import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [                 // Componant | Directives | Pipes
    AppComponent, UsersComponent
  ],
  imports: [                      // Module - Build-in or Custom module
    BrowserModule
  ],
  providers: [],                  // Service - Register the service with providers
  bootstrap: [AppComponent]       // Root Componant
})
export class AppModule { }
