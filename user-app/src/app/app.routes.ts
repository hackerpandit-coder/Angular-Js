import { Route } from '@angular/compiler/src/core';

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './users/users.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { LoginGuardService } from './services/login-guard.service';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { LogoutComponent } from './components/logout/logout.component';

export const APP_ROUTES : Routes =[
    {
        path : "",              // http://localhost:4200
        redirectTo : "/login",
        pathMatch : "full"

    },
    {
        path : "login",        // http://localhost:4200/login
        component : LoginComponent
    },
    {
        path : "register",     // http://localhost:4200/register
        component : RegisterComponent
    },
    {
        path : "users",        // http://localhost:4200/users
        component : UsersComponent,
        canActivate : [LoginGuardService]
    },
    {
        path : "pipe-demo",    // http://localhost:4200/pipe-demo
        component : PipeDemoComponent
    },
    {
        path : "observable-demo", // http://localhost:4200/observable-demo
        component : ObservableDemoComponent
    }, 
    {
        path : "product", // http://localhost:4200/product
        component : ProductComponent,
        children : [
            {
                path : "overview/:id/:name",
                component : OverviewComponent
            },
            {
                path : "specification",
                component : SpecificationComponent
            }
        ]
    },
    {
        path : "lazy",
        loadChildren : () => import("./modules/lazy/lazy.module").then(m => m.LazyModule)
    },
    {
        path : "logout",  // http://localhost:4200/logout
        component : LogoutComponent
    },
    {
        path : "**",           // http://localhost:4200/non-exist -> login
        redirectTo : "/login",
        pathMatch : "full"
    }
]