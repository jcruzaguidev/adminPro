import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
   selector: 'app-dona',
   templateUrl: './dona.component.html',
   styles: [],
})
export class DonaComponent {
   
   @Input() title:string = "Sin titulo";

   @Input('labels') doughnutChartLabels: string[] = [
      'Download Sales 1',
      'In-Store Sales',
      'Mail-Order Sales',
   ];

   @Input() dataTable: number[] = [3, 6, 9];

   public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
         {
            data: this.dataTable,
         },
      ],
   };

   public doughnutChartType: ChartType = 'doughnut';
}
