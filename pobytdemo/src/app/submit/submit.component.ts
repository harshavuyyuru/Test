import { Component, OnInit } from '@angular/core';
import {Data} from '../data.type';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
  inputs: ['value']
})
export class SubmitComponent implements OnInit {

value:Data;

  constructor() { }

  ngOnInit() {
  }

}
