import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any = {};
  constructor() {
    // this.chartOptions = {
    //     chart: {
    //       type: 'pie'
    //   },
    //   title: {
    //       text: 'Egg Yolk Composition'
    //   },
    //   tooltip: {
    //       valueSuffix: '%'
    //   },
    //   subtitle: {
    //       text:
    //       'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    //   },
    //   plotOptions: {
    //       series: {
    //           allowPointSelect: true,
    //           cursor: 'pointer',
    //           dataLabels: [{
    //               enabled: true,
    //               distance: 20
    //           }, {
    //               enabled: true,
    //               distance: -40,
    //               format: '{point.percentage:.1f}%',
    //               style: {
    //                   fontSize: '1.2em',
    //                   textOutline: 'none',
    //                   opacity: 0.7
    //               },
    //               filter: {
    //                   operator: '>',
    //                   property: 'percentage',
    //                   value: 10
    //               }
    //           }]
    //       }
    //   },
    //   series: [
    //     {
    //         name: 'Percentage',
    //         colorByPoint: true,
    //         data: [
    //             {
    //                 name: 'Water',
    //                 y: 55.02
    //             },
    //             {
    //                 name: 'Fat',
    //                 sliced: true,
    //                 selected: true,
    //                 y: 26.71
    //             },
    //             {
    //                 name: 'Carbohydrates',
    //                 y: 1.09
    //             },
    //             {
    //                 name: 'Protein',
    //                 y: 15.5
    //             },
    //             {
    //                 name: 'Ash',
    //                 y: 1.68
    //             }
    //         ]
    //     }
    // ]
    //   };
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Employee Details'
      },
      tooltip: {
        valueSuffix: '%'
      },
     
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
            enabled: true,
            distance: 20
          }, {
            enabled: true,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7
            },
            filter: {
              operator: '>',
              property: 'percentage',
              value: 10
            }
          }]
        }
      },
      series: [
        {
          name: 'Percentage',
          colorByPoint: true,
          data: [
            {
              name: 'Manger',
              y: 20
            },
            {
              name: 'Senior Softawre Engineers',
              sliced: true,
              selected: true,
              y: 40
            },
            {
              name: 'Testers',
              y: 20
            },
            {
              name: 'Team lead',
              y: 10
            },
            {
              name: 'Junior SE',
              y: 10
            }
          ]
        }
      ]
    }
  }
}
