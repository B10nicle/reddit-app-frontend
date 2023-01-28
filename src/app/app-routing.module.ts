import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './components/auth/signup/signup.component';
import {LoginComponent} from "./components/auth/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {ViewPostComponent} from "./components/post/view-post/view-post.component";
import {UserProfileComponent} from "./components/auth/user-profile/user-profile.component";
import {ListSubredditsComponent} from "./components/subreddit/list-subreddits/list-subreddits.component";
import {CreatePostComponent} from "./components/post/create-post/create-post.component";
import {AuthGuard} from "./components/auth/auth.guard";
import {CreateSubredditComponent} from "./components/subreddit/create-subreddit/create-subreddit.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'view-post/:id', component: ViewPostComponent},
  {path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'list-subreddits', component: ListSubredditsComponent},
  {path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard]},
  {path: 'create-subreddit', component: CreateSubredditComponent, canActivate: [AuthGuard]},
  {path: 'sign-up', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
