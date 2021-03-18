import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [                 // Componant | Directives | Pipes
    AppComponent, UsersComponent, UserImageComponent, UserInfoComponent, HighlightDirective
  ],
  imports: [                      // Module - Build-in or Custom module
    BrowserModule, FormsModule
  ],
  providers: [],                  // Service - Register the service with providers
  bootstrap: [AppComponent]       // Root Componant
})
export class AppModule { }
