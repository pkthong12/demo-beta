import { Component, input } from "@angular/core";

@Component({
    selector: 'color',
    templateUrl: './color.component.html',
    standalone: true
})

export class ColorComponent {
    color = input<string>('');


    arrayColor = ['red', 'yellow', 'black', 'white', 'orange'];

    // Shades for each color (simulating SASS $reds, $yellows, etc.)
    colorShades: { [key: string]: string[] } = {
        red: [
            '#FFF1F0', // red-10
            '#ffcccc', // red-20
            '#ffb3b3', // red-30
            '#ff9999', // red-40
            '#ff8080', // red-50
            '#ff6666', // red-60 (primary)
            '#ff4d4d', // red-70
            '#ff3333', // red-80
            '#ff1a1a', // red-90
            '#ff0000'  // red-100
        ],
        yellow: [
            '#ffffe6', '#ffffcc', '#ffffb3', '#ffff99', '#ffff80',
            '#ffff66', '#ffff4d', '#ffff33', '#ffff1a', '#ffff00'
        ],
        black: [
            '#999999', '#8c8c8c', '#808080', '#737373', '#666666',
            '#595959', '#4d4d4d', '#404040', '#333333', '#262626'
        ],
        white: [
            '#ffffff', '#f7f7f7', '#f0f0f0', '#e8e8e8', '#e0e0e0',
            '#d9d9d9', '#d1d1d1', '#c9c9c9', '#c2c2c2', '#bababa'
        ],
        orange: [
            '#ffeee6', '#ffddcc', '#ffccb3', '#ffbb99', '#ffaa80',
            '#ff9966', '#ff884d', '#ff7733', '#ff661a', '#ff5500'
        ]
    };

    // Number of shades per color (same as SASS example: 10 shades)
    arrayColorDetail = new Array(10).fill(''); // Used for iteration

    constructor() {
        console.log(this.arrayColorDetail.length); // Outputs: 10
    }
}