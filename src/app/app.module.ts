import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { CallbackComponent } from "./callback/callback.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from "./auth.guard";
import { CollectionComponent } from "./collection/collection.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallbackComponent,
    ProfileComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
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
        path: "**",
        redirectTo: ""
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
