import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { LocalstorageserviceService } from '../services/manager/localstorageservice.service';
//import {Chart} from '../../../node_modules/chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('mychart') mychart: any;
  canvas: any;
  ctx: any;
  userData: any;


  constructor(
    private localStorageServive: LocalstorageserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
   this.authCheck();
  }

  authCheck(){
	this.userData = this.localStorageServive.getData('manager');
    console.log('this.userData',  this.userData.role);
    if (!this.userData) {
      this.router.navigate(['/']);
    }
  }

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Current Vallue',
            data: [12, 20, 40],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            borderColor: '#007ee7',
            fill: true,
          },
          {
            //   label: 'Invested Amount',
            //   data: [6, 20, 40],
            //   backgroundColor: [
            // 	'rgb(255, 99, 132)',
            // 	'rgb(54, 162, 235)',
            // 	'rgb(255, 205, 86)',
            // 	],
            //   borderColor: "#007ee7",
            //   fill: true,
          },
        ],
        labels: ['January 2019', 'February 2019', 'March 2019'],
      },
    });
  }
}
