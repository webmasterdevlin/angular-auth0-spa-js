import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { CallbackComponent } from "./callback/callback.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from "./auth.guard";
import { CollectionComponent } from "./collection/collection.component";
import { ExternalApiComponent } from './external-api/external-api.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallbackComponent,
    ProfileComponent,
    CollectionComponent,
    ExternalApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "callback",
        component: CallbackComponent
      },
      {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "collection",
        component: CollectionComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'external-api',
        component: ExternalApiComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "**",
        redirectTo: ""
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
