import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes,Router, ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  // {path: 'details', component: DetailsComponent},
  //  {path: 'offers', component: OffersComponent},
  {path: 'feedback', component: FeedbackComponent,
  children:[
      {path: '', component: OffersComponent},
      {path: 'offers', component: OffersComponent},
      {path:'submit',component:SubmitComponent},
      {path: 'details', component: DetailsComponent,
      children:[
        {
          path:'submit',component:SubmitComponent
        }

      ]
    
    }
    ]
}


];

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    LoginComponent,
    OffersComponent,
    DetailsComponent,
    AboutComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
