import { Component, OnInit,Directive } from '@angular/core';
import { SubmitComponent } from '../submit/submit.component';
import {RouterModule,Routes,Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  
})
export class DetailsComponent implements OnInit {

  
  constructor(private route:ActivatedRoute,private router:Router) { }

  formClick(Data) {
    console.log(Data);
    this.router.navigate(['submit']);
  }

  ngOnInit() {
  }

  
}
