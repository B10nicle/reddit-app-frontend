import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {SubredditSideBarComponent} from "./components/shared/subreddit-side-bar/subreddit-side-bar.component";
import {CreatePostComponent} from "./components/post/create-post/create-post.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./components/home/home.component";
import {SideBarComponent} from "./components/shared/side-bar/side-bar.component";
import {VoteButtonComponent} from "./components/shared/vote-button/vote-button.component";
import {ListSubredditsComponent} from "./components/subreddit/list-subreddits/list-subreddits.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {UserProfileComponent} from "./components/auth/user-profile/user-profile.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CreateSubredditComponent} from "./components/subreddit/create-subreddit/create-subreddit.component";
import {ViewPostComponent} from "./components/post/view-post/view-post.component";
import {ToastrModule} from "ngx-toastr";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {PostTileComponent} from "./components/shared/post-tile/post-tile.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxWebstorageModule} from "ngx-webstorage";
import {TokenInterceptor} from "./token-interceptor";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {EditorModule} from "@tinymce/tinymce-angular";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostTileComponent,
    VoteButtonComponent,
    SideBarComponent,
    SubredditSideBarComponent,
    CreateSubredditComponent,
    CreatePostComponent,
    ListSubredditsComponent,
    ViewPostComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
