import { NgModule } from '@angular/core';
import {RouterModule,Routes,Router, ActivatedRoute} from '@angular/router';

import { AppComponent } from '../app.component';
import {FeedbackComponent} from '../feedback/feedback.component';

export const routes: Routes = [
  {
      path: '',
      component: AppComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
}
];

@NgModule({
  imports: [
    
      RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
